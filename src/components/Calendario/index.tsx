import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useMyContext } from '../../contexts/database';
import { useNavigation } from '@react-navigation/native';

interface DataProps{
    mes:number,
    ano:number,
}

const Calendario:React.FC<DataProps> = (props)=>{

    const {semanas, encontrarSemana} = useMyContext();
    const navigation = useNavigation();
    const [whatChange, setWhatChange] = useState(0)
    const [selectedMonth, setSelectedMoth] = useState(props.mes)
    const [selectedYear, setSelectedYear] = useState(props.ano)
    const [diasContados, setDiasContados] = useState<String[][]>([])
    const [dias, setDias] = useState<string[]>([]);

    const [meses] = useState([{numero:0,nome:"Janeiro"},
                            {numero:1,nome:"Fevereiro"},
                            {numero:2,nome:"Março"},
                            {numero:3,nome:"Abril"},
                            {numero:4,nome:"Maio"},
                            {numero:5,nome:"Junho"},
                            {numero:6,nome:"Julho"},
                            {numero:7,nome:"Agosto"},
                            {numero:8,nome:"Setembro"},
                            {numero:9,nome:"Outubro"},
                            {numero:10,nome:"Novembro"},
                            {numero:11,nome:"Dezembro"}])

    function findMonthName(num: number){
        const index = meses.findIndex( m => m.numero === num)
        return meses[index].nome;
    }

    function diasNoMes(ano: number, mes: number) {
        
        var data = new Date(ano, mes, 0);
        return data.getDate();

    }

    function handleNavigateVerDia(index: number, dia: Date){

        console.log(index+ "data: "+ dia.toDateString())

        navigation.navigate("VerDia",{index, dia});    

    }

    function handleChangeYear(n: number){

        setSelectedYear(selectedYear+n)

    }

    function handleChangeMonth(i: number) {
        
        var newMonth = selectedMonth+i;

        if(newMonth > 11){
            newMonth = 0
            setSelectedYear(selectedYear+1)
        }
        
        if(newMonth < 0){
            setSelectedYear(selectedYear-1)
            newMonth = 11
        }

        setSelectedMoth(newMonth);

    }

    useEffect(()=>{
        let tot = diasNoMes(selectedYear, selectedMonth+1);
        let index = 1;
        let vet = []
        let weekDay = 0;

        while(index <= tot) {
            
            if(weekDay > 6){

                weekDay = 0

            }

            const hj = new Date(selectedYear, selectedMonth, index);
            let value = " "

            if(hj.getDay() === weekDay){

                value =  ""+hj.getDate();
                index++;

            }

            vet.push(value);

            weekDay++;


        }

        for (let index = 0; index < vet.length%7 ; index++) {
            
            vet.push(" ");
            
        }

        setDias(vet)

    },[selectedMonth, selectedYear]);

    useEffect(()=>{

        var diasC = [new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>(),new Array<String>()]

        semanas.map((s,i)=>{

            s.dias.map((d, i2)=>{

                const day = String(new Date(d.data).getDate());
                const month = new Date(d.data).getMonth();
                const year = new Date(d.data).getFullYear();
              //  const day2 = dias.find(element=> element === day )
                if(year === selectedYear){
                    diasC[month].push(day)  
                }

            })

        })
        
        setDiasContados(diasC)

    },[selectedYear])

    return(
        <View style={styles.calendario}>
            <View style={styles.mes}>
            {(whatChange === 1)&&
            <TouchableOpacity onPress={()=>{handleChangeYear(-1)}} >
                    <FontAwesome name="caret-left" size={40} color="#8169be"/>
            </TouchableOpacity>
            }
            <Text onPress={()=>{setWhatChange(1)}}  style={styles.anoTexto}>{selectedYear}</Text>
            {(whatChange === 1)&&
                <TouchableOpacity onPress={()=>{handleChangeYear(1)}}>
                    <FontAwesome name="caret-right" size={40} color="#8169be"/>
                </TouchableOpacity>
            }
            </View>
            <View style={styles.mes}>
                {(whatChange === 0)&&
                <TouchableOpacity onPress={()=>{handleChangeMonth(-1)}} >
                        <FontAwesome name="caret-left" size={40} color="#8169be"/>
                </TouchableOpacity>
                }
                <Text onPress={()=>{setWhatChange(0)}} style={styles.mesTexto}>{findMonthName(selectedMonth)}</Text>
               {(whatChange === 0)&&
                <TouchableOpacity onPress={()=>{handleChangeMonth(1)}}>
                    <FontAwesome name="caret-right" size={40} color="#8169be"/>
                </TouchableOpacity>
                }
            </View>
            <View style={styles.semanas}>
                <View style={styles.semanaHeader}>
                    <Text style={styles.textSemanaHeader}>Dom</Text>
                    <Text style={styles.textSemanaHeader}>Seg</Text>
                    <Text style={styles.textSemanaHeader}>Ter</Text>
                    <Text style={styles.textSemanaHeader}>Qua</Text>
                    <Text style={styles.textSemanaHeader}>Qui</Text>
                    <Text style={styles.textSemanaHeader}>Sex</Text>
                    <Text style={styles.textSemanaHeader}>Sab</Text>
                </View>
                <View style={styles.separator}/>       
                    <View style={styles.semana}>                 
                    {
                       dias.slice(0,7).map((d,i)=>{

                                if(i===0){
                                    return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana,{borderTopLeftRadius:10}]}>
                                            {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                            :<Text style={styles.textSemana}>{d}</Text>
                                            }
                                            {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                        </View>

                                }
                                if(i===6){
                                    return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana,{borderTopRightRadius:10}]}>
                                            {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                            :<Text style={styles.textSemana}>{d}</Text>
                                            }
                                            {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                        </View>
                                }

                                return <View key={`${i}`} style={styles.ViewSemana}>
                                            {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                            :<Text style={styles.textSemana}>{d}</Text>
                                            }
                                            {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#1e1041"/>}
                                        </View>
                       })
                    
                    }
                   
                    </View>
                    <View style={styles.semana}>                 
                    {
                       dias.slice(7,14).map((d,i)=>{

                        if(i===0){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>

                        }
                        if(i===6){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>
                        }

                        return <View key={`${i}`} style={styles.ViewSemana}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#1e1041"/>}
                                </View>
                       })
                    
                    }
                   
                    </View>
                    <View style={styles.semana}>                 
                    {
                       dias.slice(14,21).map((d,i)=>{

                        if(i===0){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>

                        }
                        if(i===6){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>
                        }

                        return <View key={`${i}`} style={styles.ViewSemana}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#1e1041"/>}
                                </View>
                       })
                    
                    }
                   
                    </View>
                    <View style={styles.semana}>                 
                    {
                       dias.slice(21,28).map((d,i)=>{

                        if(i===0){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>

                        }
                        if(i===6){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>
                        }

                        return <View key={`${i}`} style={styles.ViewSemana}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#1e1041"/>}
                                </View>
                       })
                    
                    }
                   
                    </View>
                    <View style={styles.semana}>                 
                    {
                       dias.slice(28,35)?.map((d,i)=>{

                        if(i===0){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana,{borderBottomLeftRadius:10}]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>

                        }
                        if(i===6){
                            return <View key={`${i}`} style={[styles.ViewSemana,styles.finalDeSemana,{borderBottomRightRadius:10}]}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#8169be"/>}
                                </View>
                        }

                        return <View key={`${i}`} style={styles.ViewSemana}>
                                    {(diasContados[selectedMonth]?.find(element=> element === d ))?<Text onPress={() =>{handleNavigateVerDia(encontrarSemana(new Date(selectedYear, selectedMonth, Number(d))),new Date(selectedYear, selectedMonth, Number(d)))}} style={styles.textSemana}>{d}</Text> 
                                    :<Text style={styles.textSemana}>{d}</Text>
                                    }
                                    {( diasContados[selectedMonth]?.find(element=> element === d ))&&<FontAwesome name="check" size={10} color="#1e1041"/>}
                                </View>
                       })
                    
                    }
                   
                    </View>
            </View>
        </View>
    );

}

const DimensionFont = (Dimensions.get("window").fontScale)
const DimensionHeight = (Dimensions.get("window").height)
const DimensionWidth = (Dimensions.get("window").width)

const styles = StyleSheet.create({

    calendario:{
        margin: DimensionWidth * 0.06,
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        borderRadius: DimensionWidth * 0.06,
    },
    mes:{
        marginTop: DimensionHeight * 0.005,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    },
    mesTexto:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 23,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        paddingHorizontal: DimensionWidth * 0.06
    },
    anoTexto:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 13,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginTop: DimensionHeight * 0.01,
        paddingHorizontal: DimensionWidth * 0.1
    },
    semanas:{
        backgroundColor:"#8169be",
        borderRadius: DimensionWidth * 0.055,
        alignItems:"center",
        justifyContent:"center",
        marginTop: DimensionHeight * 0.02,
        marginBottom: DimensionHeight * 0.02,
        marginHorizontal: DimensionWidth * 0.03,
        paddingBottom: DimensionWidth * 0.02
    },
    semanaHeader:{
        flexDirection:"row",
        padding: DimensionWidth * 0.02
    },
    semana:{
        flexDirection:"row",
        paddingHorizontal: DimensionWidth * 0.02,
    },
    textSemanaHeader:{
        flex:1,
        padding: DimensionWidth * 0.01,
        textAlign:"center",
        fontFamily:"Ubuntu_500Medium",
        color:"#FFeeFF",
    },
    textSemana:{
        textAlign:"center",
        color:"#FFeeFF",
    },
    ViewSemana:{
        paddingVertical: 5,
        paddingHorizontal: 5,
        flex:1,
    },
    separator:{
        width: DimensionWidth * 0.75,
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal: 3,
        marginBottom: 10,
    },
    finalDeSemana:{
        flex:1,
        backgroundColor:"#5a4985"
    },
});

export default Calendario;