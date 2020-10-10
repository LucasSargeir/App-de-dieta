import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DataProps{
    cor: "G"|"R"|"Y";
    alimento: string;
    porcao: string,
    pontos: string,
    onPress: Function;
}

const FoodTable:React.FC<DataProps> = (props) =>{

    
        if(props.cor === "G"){
            return (<TouchableOpacity onPress={()=>{props.onPress()}} style={[styles.colum, styles.typeGreen]}>
                    <Text style={styles.alimentoText}>
                        {props.alimento}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.porcao}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.pontos}
                    </Text>
                </TouchableOpacity>
            );
        }
        if(props.cor === "R"){
            return (<TouchableOpacity onPress={()=>{props.onPress()}} style={[styles.colum,styles.typeRed]}>
                    <Text style={styles.alimentoText}>
                        {props.alimento}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.porcao}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.pontos}
                    </Text>
                </TouchableOpacity>
            );
        }
        if(props.cor === "Y"){
            return (
                <TouchableOpacity onPress={()=>{props.onPress()}} style={[styles.colum,styles.typeYellow ]}>
                    <Text style={styles.alimentoText}>
                        {props.alimento}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.porcao}
                    </Text>
                    <Text style={styles.alimentoText}>
                        {props.pontos}
                    </Text>
                </TouchableOpacity>
            );
        }
        
        return (<></>);
    
}
const styles = StyleSheet.create({
    colum:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        borderBottomRightRadius:7,
        borderTopLeftRadius: 7,
        marginBottom: 2,
    },
    alimentoText:{
        flex:1,
        color:"#FFF",
        marginBottom:2,
        padding: 7,
        fontSize: 12
    },
    typeGreen:{
        backgroundColor:"rgba(127,201,80,0.7)",
    },
    typeRed:{
        backgroundColor:"rgba(210,47,47,0.7)",
    },
    typeYellow:{
        backgroundColor:"rgba(236,238,49, 0.7)",
    },
});


export default FoodTable;