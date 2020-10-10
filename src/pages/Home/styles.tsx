import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"space-between"
    },
    title:{
        color:"#FFeeFF",
        fontSize: 35,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginTop: -15,
        marginHorizontal:50
    },
    footer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        color:"#FFeeFF",
        marginBottom: 10,
    },
    description:{
        color:"#FFeeFF"
    },
    link:{
        textDecorationLine: "underline",
        color:"#FFeeFF"
    },
    optionsContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        flexWrap:"wrap"
    },
    option:{
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "space-around",
        margin: 20,
        borderRadius: 20,
        width: 140,
        height: 140
    },
    optionTitle:{
        color:"#FFF"
    },
    settings:{
        alignSelf:"flex-end",
        marginTop:35,
        marginRight: 15
    },
    inputPeso:{
        backgroundColor: "#FFF",
        margin: 50,
        paddingHorizontal:15,
        height:50,
        borderRadius: 20,
        fontSize: 20

    }
});

export default styles;