import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
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

const DimensionFont = (Dimensions.get("window").fontScale)
const DimensionHeight = (Dimensions.get("window").height)
const DimensionWidth = (Dimensions.get("window").width)

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#8169be",
        alignItems:"center",
        justifyContent:"center",
        width: DimensionWidth * 0.45,
        alignSelf:"center",
        padding: DimensionWidth * 0.055,
        borderRadius: DimensionWidth * 0.03
    },
    text:{
        color:"#FFF",
        fontFamily: "Ubuntu_500Medium",
        fontSize: DimensionFont * 15
    }
});

export default Button;