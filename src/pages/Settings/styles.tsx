import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
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
    list:{
        flex:1,
        marginTop:40,
        marginHorizontal: 35
    },
    textSetting:{
        color:"#FFeeFF",
        fontSize:17,
        paddingVertical:10,
        fontFamily:"Ubuntu_500Medium"
    },
    iconSetting:{
    },
    separator:{
        width:"90%",
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal: 3,
        marginBottom: 10,
    },
});

export default styles;