import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent:'space-between'
    },
    title:{
        color:"#FFeeFF",
        fontSize: 25,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal:35
    },
    header:{
        marginTop: 35,
        marginHorizontal:15
    },
    information:{
        paddingHorizontal:40,
        marginTop: 30
    },
    textInformation:{
        color:"#FFeeFF",
        fontSize:20,
        fontFamily:"Ubuntu_500Medium"
    }
});

export default styles;