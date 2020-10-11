import React, {useEffect, useState} from 'react';   
import {ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMyContext } from '../../contexts/database';
import {Alimento, Semana} from '../../myTypes/index'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface DataProps{
    alimentos: Alimento[],
    dia: Date
}

const FoodPerDay:React.FC<DataProps> = (props) =>{
    
    const navigation = useNavigation();

    const [selectedType, setSelectedType] = useState(0);
    const [alimentos, setAlimentos] = useState(props.alimentos);
    const [totalR, setTotalR] = useState(0);
    const [totalY, setTotalY] = useState(0);
    const [totalG, setTotalG] = useState(0);

    const {findWeek,apagaAlimentoDia} = useMyContext();

    function handleChangeType(t: number){

        if( t === selectedType){
            setSelectedType(0);
        }
        else{
            setSelectedType(t)
        }

    }
    function handleInsertNewItems(){

        //console.log("dia:" + props.dia.toDateString());
        navigation.navigate("NewItem",{semana: findWeek(props.dia), dia: props.dia})
        setSelectedType(0);

    }

    function handleDeleteItem(a: Alimento, d: Date){

        apagaAlimentoDia(a, d)
        setSelectedType(0);

    }

    useEffect(()=>{
        
        var totR = 0;
        var totY = 0;
        var totG = 0;

        alimentos.map((a)=>{

            if(a.cor === "R"){
                totR += Number(a.pontuacao)
            }

            if(a.cor === "Y"){
                totY += Number(a.pontuacao)
            }

            if(a.cor === "G"){
                totG += Number(a.pontuacao)
            }

        })
        setTotalR(totR);
        setTotalY(totY);
        setTotalG(totG);

    },[selectedType])

    return(
        <View style={styles.containerView}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={()=>{handleChangeType(1)}}>
                    {
                    (selectedType === 1 )?
                        <Text style={[styles.headText, styles.typeRed, styles.selectedHeader]}>
                            <FontAwesome name="eye" size={19} color="#FFF"/>
                        </Text>
                        :
                        <Text style={[styles.headText, styles.typeRed]}>
                            <FontAwesome name="eye-slash" size={19} color="#FFF"/>
                        </Text>
                    }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{handleChangeType(2)}}>
                    {
                    (selectedType === 2 )?
                        <Text style={[styles.headText, styles.typeYellow, styles.selectedHeader]}>
                            <FontAwesome name="eye" size={19} color="#FFF"/>
                        </Text>
                        :
                        <Text style={[styles.headText, styles.typeYellow]}>
                            <FontAwesome name="eye-slash" size={19} color="#FFF"/>
                        </Text>
                    }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{handleChangeType(3)}}>
                    {
                    (selectedType === 3 )?
                        <Text style={[styles.headText, styles.typeGreen, styles.selectedHeader]}>
                            <FontAwesome name="eye" size={19} color="#FFF"/>
                        </Text>
                        :
                        <Text style={[styles.headText, styles.typeGreen]}>
                            <FontAwesome name="eye-slash" size={19} color="#FFF"/>
                        </Text>
                    }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{handleInsertNewItems()}}>
                    <Text style={[styles.headText, {marginEnd:10}]}>
                        <FontAwesome name="plus-circle" size={19} color="#FFF"/>
                    </Text>
                </TouchableOpacity>
            </View>
            {
                (selectedType === 1)?
                    <View style={[styles.viewBody,{backgroundColor:"rgba(210,47,47,0.7)"}]}>
                        <ScrollView contentContainerStyle={{paddingBottom: 30}}>               
                            {
                                alimentos.map((a,i)=>{

                                    if(a.cor === 'R'){

                                        return(
                                            <View key={`${i}`} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingEnd: 30}}>
                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao == "1" )?"ponto":"pontos"}</Text>
                                                <TouchableOpacity onPress={()=>{handleDeleteItem(a, props.dia)}}>
                                                    <FontAwesome name="trash" size={15} color="#FFF"/>
                                                </TouchableOpacity>
                                            </View>
                                        )

                                    }

                                })
                            }
                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.separator}/>
                            <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalR} {(totalR == 1 )?"ponto":"pontos"}</Text>
                        </View>
                    </View>
                :
                (selectedType === 2)?
                    <View style={[styles.viewBody,{backgroundColor:"rgba(236,238,49, 0.7)"}]}>
                        <ScrollView contentContainerStyle={{paddingBottom: 30}}>               
                        {
                                alimentos.map((a,i)=>{

                                    if(a.cor === 'Y'){

                                        return(
                                            <View key={`${i}`} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingEnd: 30}}>
                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao == "1" )?"ponto":"pontos"}</Text>
                                                <TouchableOpacity onPress={()=>{handleDeleteItem(a, props.dia)}}>
                                                    <FontAwesome name="trash" size={15} color="#FFF"/>
                                                </TouchableOpacity>
                                            </View>
                                        )

                                    }

                                })
                            }
                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.separator}/>
                            <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalY} {(totalY == 1 )?"ponto":"pontos"}</Text>
                        </View>
                    </View>
                :
                (selectedType === 3)?
                <View style={[styles.viewBody,{backgroundColor:"rgba(127,201,80,0.7)"}]}>
                    <ScrollView contentContainerStyle={{paddingBottom: 30}}>               
                    {
                                alimentos.map((a,i)=>{

                                    if(a.cor === 'G'){

                                        return(
                                            <View key={`${i}`} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingEnd: 30}}>
                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao == "1" )?"ponto":"pontos"}</Text>
                                                <TouchableOpacity onPress={()=>{handleDeleteItem(a, props.dia)}}>
                                                    <FontAwesome name="trash" size={15} color="#FFF"/>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }

                                })
                            }
                    </ScrollView>
                    <View style={styles.footer}>
                        <View style={styles.separator}/>
                        <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalG} {(totalG == 1 )?"ponto":"pontos"}</Text>
                    </View>
                </View>
                :
                <Text style={styles.nothingText}>Clique em uma cor para visualizar</Text>
                }
        </View>
    );

}

const styles = StyleSheet.create({

    containerView:{

    },
    viewHeader:{
        flexDirection:"row"
    },
    viewBody:{
        paddingVertical: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: "78%",
    },
    textBody:{
        paddingHorizontal:20,
        paddingVertical: 10,
        color:"#FFeeFF",
        marginLeft:20,
        justifyContent:"space-between"
    },
    textBodyTitle:{
        fontFamily: "Ubuntu_500Medium",
        paddingHorizontal:20,
        paddingVertical: 3,
        color:"#FFeeFF",
        textDecorationLine: "underline",
        marginTop: 15,
    },
    headText:{
        color:"#FFeeFF",
        paddingRight:15,
        paddingVertical:15,
        paddingHorizontal: 5
    },
    selectedHeader:{
        paddingHorizontal:20
    },
    typeGreen:{
        backgroundColor:"rgba(127,201,80,0.7)",
        borderTopRightRadius: 15,
    },
    typeRed:{
        backgroundColor:"rgba(210,47,47,0.7)",
        borderTopLeftRadius:15,
    },
    typeYellow:{
        backgroundColor:"rgba(236,238,49, 0.7)",
    },
    separator:{
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 8,
    },
    nothingText:{
        alignSelf:"center",
        color:"#8169be",
        textAlign:"center",
        marginTop: "25%"
    },
    footer:{
        
    }
});

export default FoodPerDay;