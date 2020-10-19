import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, SafeAreaView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import {Alimento} from '../../myTypes/index';

import Button from '../../components/Button';
import FoodTable from '../../components/FoodTable';
import { useMyContext } from '../../contexts/database';

const NewItem = () =>{


    const { alimentosPorCor, alimentosOrdenados, setPeso, peso, atualizarSemana} = useMyContext();

    const [typeOfView, setTypeOfView] = useState(2)
    const [selecionados, setSelecionados] = useState<Alimento[]>([]);
    const [week, setWeek] = useState(-1)
    const [inputPeso, setInputPeso] = useState(0);
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    const route = useRoute();	
    const routeParams=  route.params as {semana: number, dia: Date};

    function handleNavigateBack(){

        navigation.goBack();

    }

    function handleAddAlimento(a: Alimento){

        setSelecionados([...selecionados, a]);
    
    }

    function handleDeleteAtList(index: number){ 

        var aux = selecionados;
        aux.splice(index,1);
        setSelecionados([...aux]);
        
    }
   
    function handleInsertMeal(){

        const hoje = (routeParams.dia)? new Date(routeParams.dia) :new Date();

        const dia = {
            data: (routeParams.dia)?routeParams.dia: hoje,
            alimentos: selecionados,
        }

        //console.log(JSON.stringify(semanas));
        //return//console.log(selecionados);

        atualizarSemana(week, hoje, dia);

        //alert("Refeição adicionada com sucesso!");

        setSelecionados([]);

        navigation.goBack();

    }


    useEffect(()=>{

        setWeek(routeParams.semana)

    },[])
    
    if(peso === -1){

        return (
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <View>
                    <Text style={[styles.title, {marginTop: 70, fontSize:25}]}>Parece que estamos em uma nova semana!</Text>
                    <Text/>
                    <Text style={[styles.title, {marginTop: 20, fontSize:20}]}> Qual o seu peso atual?</Text>
                    <TextInput placeholder="00,00kg" 
                               keyboardType="decimal-pad" 
                               onChangeText={e =>{setInputPeso(Number(e))}}
                               style={styles.inputPeso}/>
                    <Button title="Enviar" onPress={()=>{setPeso(inputPeso)}}/>
                    <Text/>
                    <Text style={[styles.description, {textAlign:"center"}]}>Essa informação será usada para ver a sua evolução</Text>
                </View>
            </View>
        );

    }


    return (

        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <FontAwesome5 name="arrow-left" size={30} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.title}>Selecione os alimentos que você consumiu</Text>
            </View>
            <Text/>
            {//<Text style={styles.title2}>{(semanas[routeParams.semana])?"Semana "+semanas[routeParams.semana].numero:" "}</Text>
            }
            <View style={styles.selectedBox}>
            {(selecionados.length === 0)&&
                <View>
                    <Text style={styles.description}>Atenção!</Text>
                    <Text style={styles.description}>Considere as porções indicadas, caso seja uma porção maior do que a disponível insira o item mais de uma vez</Text>
                    <View style={styles.separator}/>
                </View>
            }
                <ScrollView 
                            contentContainerStyle={{paddingEnd: 5}}>
                    <View style={styles.selectedItems}>
                    {(selecionados.length !== 0)?
                        selecionados.map((s, i)=>{
                            return(
                                <View key={`${i}`} style={styles.item}>
                                    <Text style={styles.itemText}>
                                        {s.nome}
                                    </Text>
                                    <TouchableOpacity onPress={()=>{handleDeleteAtList(i)}} style={styles.itemExit}>
                                        <FontAwesome5 name="times" size={10} color="#FFF"/>
                                    </TouchableOpacity>
                                </View>);
                   
                        })
                        :
                        <Text style={styles.nothingText}>Nenhum item selecionado, clique em um alimento para adicionar</Text>
                    }
                    </View>
                </ScrollView>
            </View>
            <View style={styles.visoes}>
                <View style={styles.groupVision}>
                    <TouchableOpacity style={styles.visao} onPress={()=>{setTypeOfView(3)}}>
                        {(typeOfView === 3)?
                            <FontAwesome5 name="search" size={10} color="#FFF"/>
                            :
                            <FontAwesome5 name="search" size={10} color="#8169be"/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.visao} onPress={()=>{setTypeOfView(1)}}>
                        {(typeOfView === 1)?
                            <FontAwesome5 name="sort-alpha-up" size={10} color="#FFF"/>
                            :
                            <FontAwesome5 name="sort-alpha-up" size={10} color="#8169be"/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.visao} onPress={()=>{setTypeOfView(2)}}>
                        {(typeOfView === 2)?
                            <FontAwesome5 name="palette" size={10} color="#FFF"/>
                            :
                            <FontAwesome5 name="palette" size={10} color="#8169be"/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.visaoSend} onPress={()=>{handleInsertMeal()}}>
                    <Text style={styles.sendText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            {(typeOfView === 3)&&
                <SafeAreaView style={styles.inputSearchView}>
                    <TextInput style={styles.inputSearch} value={search} onChangeText={(e)=>{setSearch(e)}}/>
                </SafeAreaView>
            }
            <View>
                <View style={styles.alimentos}>
                    <View style={styles.headerTable}>
                        <Text style={styles.headerTableText}>Alimento</Text>
                        <Text style={styles.headerTableText}>Porção</Text>
                        <Text style={styles.headerTableText}>Pontuação</Text>
                    </View>

                    <View style={styles.separator}/>

                    <ScrollView showsVerticalScrollIndicator={true}                          
                                horizontal={false}
                                contentContainerStyle={{paddingEnd: 10}}>
                        {
                        (typeOfView === 2)&&
                            alimentosPorCor.map((a, i) => {
                                
                                return <FoodTable key={String(i)} cor={a.cor} alimento={a.nome} pontos={a.pontuacao} porcao={a.porcao} onPress={()=>{handleAddAlimento(a)}}/>
                                

                            })
                        }
                        {
                        (typeOfView === 1)&&
                            alimentosOrdenados.map((a, i) => {
                                
                                return <FoodTable key={String(i)} cor={a.cor} alimento={a.nome} pontos={a.pontuacao} porcao={a.porcao} onPress={()=>{handleAddAlimento(a)}}/>
                                

                            })
                        }
                        {(typeOfView === 3)&&
                            alimentosOrdenados.map((a, i) => {
                                
                                if(a.nome.toLowerCase().indexOf(search.toLocaleLowerCase())){
                                    return <FoodTable key={String(i)} cor={a.cor} alimento={a.nome} pontos={a.pontuacao} porcao={a.porcao} onPress={()=>{handleAddAlimento(a)}}/>
                                }
                                

                            })
                        }
                    </ScrollView>

                </View>
            </View>
            
        </ScrollView>

    );

}
export default NewItem;