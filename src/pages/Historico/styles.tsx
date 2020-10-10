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
    visoes:{
        flexDirection: "row",
        justifyContent:"flex-end",
        marginRight: 30,
        marginTop: 30
    },
    visao:{
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        borderRadius: 30,
        margin: 10,
        padding: 10
    },
});

export default styles;