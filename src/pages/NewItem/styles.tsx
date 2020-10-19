import {StyleSheet, Dimensions} from 'react-native';

const DimensionFont = (Dimensions.get("window").fontScale)
const DimensionHeight = (Dimensions.get("window").height)
const DimensionWidth = (Dimensions.get("window").width)

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    title:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 16,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal: DimensionWidth * 0.05
    },
    title2:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 15,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal:35
    },
    header:{
        marginTop: DimensionHeight * 0.05,
        marginHorizontal:15
    },
    description:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 9,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginTop: 5,
        marginHorizontal:DimensionWidth * 0.05
    },
    selectedBox:{
        marginTop: DimensionHeight * 0.01,
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        marginHorizontal: DimensionWidth * 0.05,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: DimensionWidth * 0.06,
        height: DimensionHeight * 0.2
    },
    separator:{
        borderBottomColor: "rgba(255,255,255,0.3)",
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 8,
    },
    selectedItems:{
        flexDirection:"row",
        marginHorizontal: DimensionWidth * 0.01,
        flexWrap: "wrap"
    },
    item:{
        flexDirection:"row",
        marginHorizontal:DimensionWidth * 0.01,
        marginVertical:5,
        borderColor: "#8169be",
        borderRadius: DimensionWidth * 1,
        borderWidth: 1,
        padding:5,
        alignItems:"center",
        justifyContent: "center"
    },
    itemText:{
        color:"#FFF",
        marginHorizontal: DimensionWidth * 0.01,
    },
    visoes:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal: DimensionWidth * 0.1,
        marginTop: DimensionHeight * 0.003,
    },
    visao:{
        backgroundColor:"#1e1041",
        width: DimensionWidth * 0.099,
        height: DimensionWidth * 0.099,
        justifyContent: "center",
        alignItems:"center",
        borderColor: "#8169be",
        borderWidth: 2,
        borderRadius: DimensionWidth * 1,
        margin: DimensionWidth * 0.01,
        padding: DimensionWidth * 0.03
    },
    groupVision:{
        flex:3,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    visaoSend:{
        backgroundColor:"#8169be",
        width: DimensionWidth * 0.2,
        height: DimensionWidth * 0.099,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: DimensionWidth * 0.02,
        margin: DimensionWidth * 0.01,
        padding: DimensionWidth * 0.03
    },
    sendText:{
        color:"#FFF",
        fontFamily: "Ubuntu_500Medium",
        fontSize: DimensionFont * 12
    },
    itemExit:{
        marginHorizontal: DimensionWidth * 0.009,
        backgroundColor:"#8169be",
        width:DimensionWidth * 0.05,
        height:DimensionWidth * 0.05,
        borderRadius: DimensionWidth * 0.05,
        alignItems:"center",
        justifyContent:"center"
    },
    nothingText:{
        alignSelf:"center",
        color:"#8169be",
        textAlign:"center"
    },
    alimentos:{
        marginHorizontal: DimensionWidth * 0.07,
        marginTop: DimensionHeight * 0.005,
        height: DimensionHeight * 0.4,
        
    },
    headerTable:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    headerTableText:{
        fontFamily:"Ubuntu_500Medium",
        color:"#FFF",
        fontSize: DimensionFont * 13,
        flex:1
    },
    colum:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
    },
    button:{
        flex:1, 
        justifyContent:"flex-end", 
        marginBottom: DimensionHeight * 0.01
        
    },
    inputPeso:{
        backgroundColor: "#FFF",
        margin: 50,
        paddingHorizontal:15,
        height:50,
        borderRadius: 20,
        fontSize: 20

    },
    inputSearchView:{
        flex:1,
        backgroundColor:"#FFF",
        marginHorizontal: DimensionWidth * 0.1,
        marginVertical: DimensionHeight * 0.01,
        borderRadius: DimensionWidth * 0.01,
        paddingHorizontal: DimensionWidth * 0.02,
        paddingVertical: DimensionHeight * 0.01,
    },
    inputSearch:{

    }
});

export default styles;