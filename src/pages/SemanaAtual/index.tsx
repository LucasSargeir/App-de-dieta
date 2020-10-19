import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles'

import FoodPerWeek from '../../components/FoodsPerWeek';
import { useMyContext } from '../../contexts/database';

const SemanaAtual = () =>{

    const navigation = useNavigation();
    const {semanas, encontrarSemana} = useMyContext();
    const [index, setIndex] = useState(-1);
    //const route = useRoute();	
    //const routeParams=  route.params as {indexSemana: number, dia: Date};

    function handleNavigateBack(){

        navigation.goBack();

    }

    useEffect(()=>{

        setIndex(encontrarSemana(new Date()))

    })

    return(
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleNavigateBack}>
                        <FontAwesome name="arrow-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Resumo da Semana</Text>
                </View>
                <View style={styles.information}>
                    
                    <FoodPerWeek/>
                    
                </View>
            </View>
            <View style={[styles.information]}>
                <Text style={styles.textInformation}>
                    Semana {semanas[index]?.numero}
                </Text>
                <Text style={styles.textInformation}>
                    Peso: {semanas[index]?.peso}
                </Text>
            </View>
        </View>
    );

}

export default SemanaAtual;