import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';


import styles from './styles';
import { useMyContext } from '../../contexts/database';
import { Alimento, Dia, Semana } from '../../myTypes';
import FoodPerDay from '../../components/FoodsPerDay';

const VerDia = () =>{
    
    const navigation = useNavigation();
    const route = useRoute();	
    const routeParams=  route.params as {index: number, dia: Date};
    const {semanas} = useMyContext()

    const [week, setWeek] = useState<Semana>();
    const [dia, setDia] = useState<Dia>()

    function handleNavigateBack(){
        navigation.goBack();
    }

    function printaData(d: Date){
        //console.log(dia?.data);
        return d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    }

    useEffect(()=>{

        setWeek(semanas[routeParams.index]);

    },[])

    useEffect(()=>{
        
        const hj = routeParams.dia;

        week?.dias.map((d,i)=>{

            const day = new Date(d.data);

            day.setMilliseconds(0)
            day.setSeconds(0)
            day.setMinutes(0)
            day.setHours(0)
            hj.setMilliseconds(0)
            hj.setSeconds(0)
            hj.setMinutes(0)
            hj.setHours(0)
            

            if(day.getTime() === hj.getTime()){

                setDia(d)

            }

        })
        
    },[week])

    useEffect(()=>{



    },[dia])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <FontAwesome5 name="arrow-left" size={30} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.title}>Informações do dia</Text>
            </View>
            <View style={styles.information}>
                <Text style={styles.informationText} >Semana: {week?.numero}</Text>
                <Text style={styles.informationText}>Data: {printaData(new Date(String(routeParams.dia)))}</Text>
                <Text style={styles.informationText}>Peso: {week?.peso}</Text>
            </View>
            <View style={styles.alimentos}>
                <Text style={styles.alimentosTitle}>Alimentos</Text>
            </View>
            <View style={{marginHorizontal:Dimensions.get("window").width * 0.05}}>
                {(dia?.alimentos)&&
                    <FoodPerDay alimentos={dia.alimentos} dia={new Date(String(routeParams.dia))}/>
                }
            </View>
        </View>
    );

}

export default VerDia;