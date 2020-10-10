import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useMyContext } from '../../contexts/database';
import { useNavigation } from '@react-navigation/native';

interface Ponto{
    semana: number,
    dia:number,
    pontos: number[],
}

const ListOfDates = () =>{

    const navigation = useNavigation();
    
    const [numberOfElements, setNumberOfElements] = useState(-1);
    const {semanas} = useMyContext();

    function handleNavigateVerDia(index: number, dia: Date){

        navigation.navigate("VerDia",{index, dia});    

    }
   
    function printaData(d: string){

        const da = new Date(d)

        return `${da.getDate()}/${da.getMonth()}/${da.getFullYear()}`;

    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>Reports</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}                          
                        horizontal={false}
                        contentContainerStyle={{paddingEnd: 10}}
                        style={style.dataContainer} >
                
                {
                    (semanas.length === 0)?
                        <Text style={style.nothingText}>Nenhum report realizado, insira um report para verificá-los</Text>
                    :
                    semanas.map((s, i)=>{                        
                        
                        return(
                            
                            s.dias.map((d, i2)=>{

                                (numberOfElements < 0 )&&setNumberOfElements(0)

                                var pts = [0,0,0]

                                d.alimentos.map((a,i)=>{

                                    if(a.cor === "R"){
                                        pts[0] = pts[0] + Number(a.pontuacao)
                                    }

                                    if(a.cor === "Y"){
                                        pts[1] = pts[1] + Number(a.pontuacao)
                                    }

                                    if(a.cor === "G"){
                                        pts[2] = pts[2] + Number(a.pontuacao)
                                    }

                                })

                                return(
                                        <TouchableOpacity key={`${i}${i2}`} style={style.dataLine} onPress={()=>{handleNavigateVerDia(i, new Date(d.data))}}>
                                            <View style={style.dataBlock}>
                                                <Text style={style.dataText}>Semana</Text>
                                                <Text style={style.dataText}> {s.numero}</Text>
                                            </View>
                                            <View style={style.informationBlock}>
                                                <View style={style.lineOne}>
                                                    <Text style={style.informationText}>Status</Text>
                                                    <Text style={style.informationText}>Peso: {s.peso}</Text>
                                                </View>
                                                <View style={style.lineTwo}>
                                                    <Text style={style.typeRed}>
                                                        {pts[0]}    
                                                    </Text>
                                                    <Text style={style.typeYellow}>
                                                        {pts[1]}
                                                    </Text>
                                                    <Text style={style.typeGreen}>
                                                        {pts[2]}
                                                    </Text>
                                                    <Text style={style.week}>{printaData(String(d.data))}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                );
                            })
                        );
                    })

                }

                {
                    (numberOfElements === -1)&&<Text style={style.nothingText}>Nenhuma refeição registrada</Text>
                }
            </ScrollView>
        </View>
    );

}

const style = StyleSheet.create({

    container:{
        margin:30,
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        borderRadius: 30,
    },
    header:{
        marginVertical: 8,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        color:"#FFeeFF",
        fontSize: 25,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        paddingHorizontal: 30
    },
    dataContainer:{
        maxHeight:480,
        minHeight:250,
    },
    dataLine:{
        flexDirection:"row",
        backgroundColor:"#8169be",
        borderRadius: 30,
        padding:2,
        margin: 10
    },
    dataBlock:{
        padding:6
    },
    dataText:{
        color:"#FFeeFF",
        fontSize: 10,
        textAlign:"center",
        fontFamily:"UbuntuCondensed_400Regular",
        paddingHorizontal: 10
    },
    informationBlock:{
        flex:1,
        backgroundColor:"#1e1041",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        
    },
    informationText:{
        color:"#FFeeFF",
        fontSize: 10,
    },
    typeGreen:{
        backgroundColor:"rgba(127,201,80,0.7)",
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 5,
        color:"#000000",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        textAlign:"center",
        textAlignVertical:"center"
    },
    typeRed:{
        backgroundColor:"rgba(210,47,47,0.7)",
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 5,
        color:"#000000",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        textAlign:"center",
        textAlignVertical:"center"
    },
    typeYellow:{
        backgroundColor:"rgba(236,238,49, 0.7)",
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 5,
        color:"#000000",
        textAlign:"center",
        textAlignVertical:"center"
    },
    lineOne:{
        flex:1,
        paddingHorizontal: 5,
        paddingVertical:2,
        flexDirection:'row',
        justifyContent: "space-between",
        paddingEnd:10,
    },
    lineTwo:{
        flex:1,
        backgroundColor:"#342754",
        paddingHorizontal: 5,
        paddingVertical:2,
        borderBottomRightRadius: 30,
        flexDirection:'row',
    },
    week:{
        textAlign:'right',
        flex:1,
        paddingRight:10,
        color:"#FFeeFF",
        fontSize: 10,
    },
    nothingText:{
        alignSelf:"center",
        color:"#8169be",
        textAlign:"center",
        marginTop: "25%"
    },
});

export default ListOfDates;