import React, { useEffect, useState } from 'react'
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Link from '../../components/Link';
import Button from '../../components/Button';
import { useMyContext } from '../../contexts/database';

const calendario1 = require('../../assets/calendario-1.png');
const calendario2 = require('../../assets/calendario-2.png');
const settings = require('../../assets/settings.png');
const grafico = require('../../assets/grafico.png');

const Home = () =>{

    const {encontrarSemana, apagarStorage} = useMyContext();
    const navigation = useNavigation();
    
    const [toquei, setToquei] = useState(false);

    function handleNavigateNovoItem(){
        
        navigation.navigate("NewItem", {semana: encontrarSemana(new Date)});

    }
    function handleNavigateHistorico(){
        
        navigation.navigate("Historico");
    }
    
    function handleNavigateEvolucao(){
        
        navigation.navigate("Evolucao");

    }
    function handleNavigateSemanaAtual(){
        
        navigation.navigate("SemanaAtual");

    }
      
    function handleNavigateSettings(){
        
      //  apagarStorage();
        navigation.navigate("Settings");

    }
    
    return( 
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.settings} onPress={handleNavigateSettings}>
                    <Image style={{width:40, height:40}} source={settings}/>
                </TouchableOpacity>
            
                <Text onPress={()=>{(toquei === false)?setToquei(true):setToquei(false)}} style={styles.title}>Bem vindo ao seu app de Dieta</Text>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={handleNavigateSemanaAtual}>
                    <Image style={{width:100, height:100}} source={calendario1}/>
                    <Text style={styles.optionTitle}>Semana Atual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={handleNavigateHistorico}>
                    <Image style={{width:100, height:100}} source={calendario2}/>
                    <Text style={styles.optionTitle}>Histórico</Text>
                </TouchableOpacity>
                {(toquei)&& <TouchableOpacity style={styles.option} onPress={handleNavigateEvolucao}>
                    <Image style={{width:100, height:100}} source={grafico}/>
                    <Text style={styles.optionTitle}>Evolução</Text>
                </TouchableOpacity>
                }
            </View>

            <Button title="Inserir" onPress={handleNavigateNovoItem}/>

            <View style={styles.footer}>
                <Text style={styles.description}>Created by </Text>    
                <Link href="https://github.com/LucasSargeir">
                    <Text style={styles.link}>Lucas Sargeiro</Text>
                </Link>
            </View>
        </View>
    );

}

export default Home;