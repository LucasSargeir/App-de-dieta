import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Calendario from '../../components/Calendario';
import ListOfDates from '../../components/ListOfDates';

const Hitorico = () => {

    const navigation = useNavigation();
    const [typeOfView, setTypeOfView] = useState(2)

    function handleNavigateBack(){

        navigation.goBack();

    }

    return(
        <View style={styles.container}> 
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <FontAwesome name="arrow-left" size={30} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.title}>Escolha uma data para consultar</Text>
            </View>
            <View style={styles.visoes}>
                <TouchableOpacity style={styles.visao} onPress={()=>{setTypeOfView(1)}}>
                    {(typeOfView === 1)?
                        <FontAwesome name="bars" size={10} color="#FFF"/>
                        :
                        <FontAwesome name="bars" size={10} color="#8169be"/>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.visao} onPress={()=>{setTypeOfView(2)}}>
                    {(typeOfView === 2)?
                        <FontAwesome name="th" size={10} color="#FFF"/>
                        :
                        <FontAwesome name="th" size={10} color="#8169be"/>
                    }
                </TouchableOpacity>
            </View>
            {(typeOfView === 2)?
                <Calendario mes={(new Date()).getMonth()} ano={(new Date()).getFullYear()} />
                :
                <ListOfDates/>
            }
        </View>
    );

}

export default Hitorico;