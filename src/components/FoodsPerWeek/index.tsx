import React, {useEffect, useState} from 'react';   
import {ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMyContext } from '../../contexts/database';
import {Semana} from '../../myTypes/index'
import { FontAwesome } from '@expo/vector-icons';

interface DataProps{

}

const FoodPerWeek:React.FC<DataProps> = (props) =>{

    const [selectedType, setSelectedType] = useState(0);
    const [semana, setSemana] = useState<Semana>();
    const [totalR, setTotalR] = useState(0);
    const [totalY, setTotalY] = useState(0);
    const [totalG, setTotalG] = useState(0);

    const {semanas, encontrarSemana} = useMyContext()

    function handleChangeType(t: number){

        if( t === selectedType){
            setSelectedType(0);
        }
        else{
            setSelectedType(t)
        }

    }

    function printaNomeSemana(n: number){

        switch(n){
            case 0:
                return "Domingo";
            case 1:
                return "Segunda-Feira";
            case 2:
                return "Terça-Feira";
            case 3:
                return "Quarta-Feira";
            case 4:
                return "Quinta-Feira";
            case 5:
                return "Sexta-Feira";
            case 6:
                return "Sábado";
            default:
                return "";
        }

    }

    useEffect(()=>{

        setSemana(semanas[encontrarSemana(new Date)]);

    },[]);

    useEffect(()=>{

        let tr = 0;
        let ty = 0;
        let tg = 0;

        semana?.dias.map((d,i)=>{

            d.alimentos.map((a, i2)=>{

                if(a.cor === "R"){ tr += Number(a.pontuacao)}
                if(a.cor === "Y"){ ty += Number(a.pontuacao)}
                if(a.cor === "G"){ tg += Number(a.pontuacao)}

            })

        })

        setTotalR(tr);
        setTotalY(ty);
        setTotalG(tg);

    },[semana]);

    return(
        <View style={styles.containerView}>
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
                    <Text style={[styles.headText, styles.typeGreen,{textAlign: "center"}]}>
                        <FontAwesome name="eye-slash" size={19} color="#FFF"/>
                    </Text>
                }
                </TouchableOpacity>
            </View>
            {
                (selectedType === 1)?
                    <View style={[styles.viewBody,{backgroundColor:"rgba(210,47,47,0.7)",}]}>
                        <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                            {
                                semana?.dias.map((d, i2)=>{
                                    
                                    var aux = 0;
                                    
                                    return(
                                        <View key={`${i2}`}>
                                            
                                            
                                    
                                            {
                                            d.alimentos.map((a,i)=>{
                                                
                                                if(a.cor === "R"){
                                                    
                                                    if(aux === 0){

                                                        aux = 1;

                                                        return(<View key={`${i2}${i}`}>
                                                                <Text style={styles.textBodyTitle}>{printaNomeSemana(Number((new Date(d.data)).getDay()))}</Text>
                                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                            </View>
                                                        )
                                                    }    

                                                    return <View key={`${i2}${i}`}>
                                                        <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                    </View>

                                                }

                                             })
                                            }
                                            
                                            

                                        </View>
                                    )

                                })
                            }

                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.separator}/>
                            <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalR} {(totalR === 1 )?"ponto":"pontos"}</Text>
                        </View>
                    </View>
                :
                (selectedType === 2)?
                    <View style={[styles.viewBody,{backgroundColor:"rgba(236,238,49, 0.7)",}]}>
                        <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                            {
                                semana?.dias.map((d, i2)=>{
                                    
                                    var aux = 0;

                                    return(
                                        <View key={`${i2}`}>
                                    
                                            {d.alimentos.map((a,i)=>{

                                                if(a.cor === "Y"){
                                                
                                                    if(aux === 0){

                                                        aux = 1;

                                                        return(<View key={`${i2}${i}`}>
                                                                <Text style={styles.textBodyTitle}>{printaNomeSemana(Number((new Date(d.data)).getDay()))}</Text>
                                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                            </View>
                                                        )
                                                    }   


                                                    return <View key={`${i2}${i}`}>
                                                        <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                    </View>

                                                }

                                            })}
                                        </View>
                                    )
                                    

                                })
                            }

                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.separator}/>
                            <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalY} {(totalY === 1 )?"ponto":"pontos"}</Text>
                        </View>
                    </View>
                :
                (selectedType === 3)?
                    <View style={[styles.viewBody,{backgroundColor:"rgba(127,201,80,0.7)",}]}>
                       <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                            {
                                semana?.dias.map((d, i2)=>{
                                    
                                    var aux = 0;

                                    return(
                                        <View key={`${i2}`}>
                                          
                                    
                                            {d.alimentos.map((a,i)=>{

                                                if(a.cor === "G"){

                                                    if(aux === 0){

                                                        aux = 1;

                                                        return(<View key={`${i2}${i}`}>
                                                                <Text style={styles.textBodyTitle}>{printaNomeSemana(Number((new Date(d.data)).getDay()))}</Text>
                                                                <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                            </View>
                                                        )
                                                    }   

                                                    return <View key={`${i2}${i}`}>
                                                        <Text style={styles.textBody}>{a.nome} - {a.pontuacao} {(a.pontuacao === "1" )?"ponto":"pontos"}</Text>
                                                    </View>

                                                }

                                            })}
                                        </View>
                                    )
                                    

                                })
                            }

                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.separator}/>
                            <Text style={[styles.textBodyTitle, {paddingBottom: 20,textDecorationLine: "none"}]}>Total: {totalG} {(totalG === 1 )?"ponto":"pontos"}</Text>
                        </View>
                    </View>
                :
                <Text style={styles.nothingText}>Clique em uma cor para visualizar</Text>
            }
        </View>
    );

}

const DimensionFont = (Dimensions.get("window").fontScale);
const DimensionHeight = (Dimensions.get("window").height);
const DimensionWidth = (Dimensions.get("window").width);

const styles = StyleSheet.create({

    containerView:{

    },
    viewHeader:{
        flexDirection:"row"
    },
    viewBody:{
        paddingVertical: 1,
        borderBottomRightRadius: DimensionWidth * 0.05,
        borderTopRightRadius: DimensionWidth * 0.05,
        borderBottomLeftRadius: DimensionWidth * 0.05,
        height: DimensionHeight * 0.76
    },
    textBody:{
        paddingHorizontal: DimensionWidth * 0.01,
        paddingVertical: 3,
        color:"#FFeeFF",
        marginLeft: DimensionWidth * 0.1,
        justifyContent:"space-between"
    },
    textBodyTitle:{
        fontFamily: "Ubuntu_500Medium",
        paddingHorizontal: DimensionWidth * 0.05,
        paddingVertical: 3,
        color:"#FFeeFF",
        textDecorationLine: "underline",
        marginTop: DimensionHeight * 0.02,
    },
    headText:{
        color:"#FFeeFF",
        paddingRight: DimensionWidth * 0.03,
        paddingVertical:DimensionWidth * 0.029,
        paddingHorizontal: DimensionWidth * 0.029
    },
    selectedHeader:{
        paddingHorizontal:DimensionWidth * 0.09
    },
    typeGreen:{
        backgroundColor:"rgba(127,201,80,0.7)",
        borderTopRightRadius: DimensionWidth * 0.05,
    },
    typeRed:{
        backgroundColor:"rgba(210,47,47,0.7)",
        borderTopLeftRadius: DimensionWidth * 0.05,
    },
    typeYellow:{
        backgroundColor:"rgba(236,238,49, 0.7)",
    },
    separator:{
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal:  DimensionWidth * 0.04,
        marginVertical: 8,
    },
    nothingText:{
        alignSelf:"center",
        color:"#8169be",
        textAlign:"center",
        marginTop:  DimensionWidth * 0.5
    },
    footer:{
        
    }
});

export default FoodPerWeek;