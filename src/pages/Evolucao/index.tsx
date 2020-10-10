import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles'
import { useMyContext } from '../../contexts/database';

const Evolucao = () =>{

    const {semanas} = useMyContext();

    const navigation = useNavigation();

    function handleNavigateBack(){

        navigation.goBack();

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <FontAwesome name="arrow-left" size={30} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.title}>Aguarde por atualizações</Text>
                <Text>{JSON.stringify(semanas)}</Text>
            </View>
        </View>
    );

}

export default Evolucao;