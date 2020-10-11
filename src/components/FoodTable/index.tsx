import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
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
        borderBottomRightRadius: Dimensions.get("window").width * 0.02,
        borderTopLeftRadius: Dimensions.get("window").width * 0.02,
        marginBottom: 3,
    },
    alimentoText:{
        flex:1,
        color:"#FFF",
        marginBottom:2,
        padding: Dimensions.get("window").width * 0.02,
        fontSize: Dimensions.get("window").fontScale * 11
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