import React from 'react';
import {View, Text, Alert} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import { useMyContext } from '../../contexts/database';

const Settings = () =>{

    const navigation = useNavigation();
    const {apagarStorage} = useMyContext();

    function handleNavigateBack(){

        navigation.goBack();

    }

    function handleDeleteData(){
        Alert.alert(
            'Atenção',
            'Essa ação não poderá ser desfeita. Tem certeza que deseja continuar?',
            [
              {
                text: 'Cancelar',
                onPress: () => {},
              },
              { 
                text: 'Confirmar', 
                onPress: () => {apagarStorage()},
              }
            ],
            { cancelable: false }
        );        
    }

    function handleWithNoFunction(){
        alert("Essa função não esta disponivel na versão beta");
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <FontAwesome5 name="arrow-left" size={30} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.title}>Configurações do Aplicativo</Text>
            </View>
            <View style={styles.list}>
                
                <TouchableOpacity onPress={handleWithNoFunction}>
                    <Text style={styles.textSetting}>
                        <FontAwesome5 style={styles.iconSetting} name="plus-circle" size={20} color="#8169be"/>
                        {"  "}Adicionar item ao cardápio
                    </Text> 
                </TouchableOpacity>

                <View style={styles.separator}/>   
                
                    <TouchableOpacity onPress={handleWithNoFunction}>
                        <Text style={styles.textSetting}>
                            <FontAwesome5 style={styles.iconSetting} name="file-upload" size={20} color="#8169be"/>
                            {"   "}Importar Dados
                        </Text>
                    </TouchableOpacity>

                <View style={styles.separator}/>   

                    <TouchableOpacity onPress={handleWithNoFunction}>
                        <Text style={styles.textSetting}>
                            <FontAwesome5 style={styles.iconSetting} name="file-download" size={20} color="#8169be"/>
                            {"   "}Exportar Dados
                        </Text>
                    </TouchableOpacity>

                <View style={styles.separator}/>   
                
                    <TouchableOpacity onPress={handleWithNoFunction}>
                        <Text style={styles.textSetting}>
                            <FontAwesome5 style={styles.iconSetting} name="info-circle" size={20} color="#8169be"/>
                            {"   "}Sobre
                        </Text>
                    </TouchableOpacity>
                
                <View style={styles.separator}/>   
                
                    <TouchableOpacity onPress={handleDeleteData}>
                        <Text style={styles.textSetting}>
                            <FontAwesome5 style={styles.iconSetting} name="trash-alt" size={20} color="#8169be"/>
                            {"   "}Excluir Dados
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );

}

export default Settings;