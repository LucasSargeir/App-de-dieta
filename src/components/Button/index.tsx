import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface DataProps{
    title:string;
    onPress: Function;
}

const Button:React.FC<DataProps> = (props) =>{

    return(

        <RectButton activeOpacity={0.7} style={styles.button} onPress={()=>{props.onPress()}}>
            <Text style={styles.text}>{props.title}</Text>
        </RectButton>

    );

}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#8169be",
        alignItems:"center",
        justifyContent:"center",
        width: "45%",
        alignSelf:"center",
        padding: 20,
        borderRadius: 10
    },
    text:{
        color:"#FFF",
        fontFamily: "Ubuntu_500Medium",
        fontSize: 16
    }
});

export default Button;