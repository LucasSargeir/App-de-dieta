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
    title2:{
        color:"#FFeeFF",
        fontSize: 15,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal:35
    },
    header:{
        marginTop: 35,
        marginHorizontal:15
    },
    description:{
        color:"#FFeeFF",
        fontSize: 10,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginTop: 5,
        marginHorizontal:15
    },
    selectedBox:{
        marginTop: 15,
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        marginHorizontal: 40,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    separator:{
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 8,
    },
    selectedItems:{
        flexDirection:"row",
        marginHorizontal: 20,
        flexWrap: "wrap"
    },
    item:{
        flexDirection:"row",
        marginHorizontal:5,
        marginVertical:5,
        borderColor: "#8169be",
        borderRadius: 20,
        borderWidth: 1,
        padding:5,
        alignItems:"center",
        justifyContent: "center"
    },
    itemText:{
        color:"#FFF",
        marginHorizontal:3,
    },
    itemExit:{
        marginHorizontal:3,
        backgroundColor:"#8169be",
        borderRadius: 10,
        width:20,
        height:20,
        alignItems:"center",
        justifyContent:"center"
    },
    nothingText:{
        alignSelf:"center",
        color:"#8169be",
        textAlign:"center"
    },
    alimentos:{
        marginHorizontal: 30,
        marginTop: 25
    },
    headerTable:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    headerTableText:{
        fontFamily:"Ubuntu_500Medium",
        color:"#FFF",
        fontSize: 20,
        flex:1
    },
    colums:{
    },
    colum:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
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
    borderLeft:{
        borderTopLeftRadius: 7
    },
    borderRight:{
        borderBottomRightRadius:7
    },
    button:{
        flex:1, 
        justifyContent:"flex-end", 
        marginBottom: 20
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