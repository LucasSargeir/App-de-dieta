import {StyleSheet, Dimensions} from 'react-native';

const DimensionFont = (Dimensions.get("window").fontScale)
const DimensionHeight = (Dimensions.get("window").height)
const DimensionWidth = (Dimensions.get("window").width)

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"space-between"
    },
    title:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 30,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal: DimensionWidth * 0.06
    },
    footer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        color:"#FFeeFF",
        marginBottom: DimensionHeight * 0.01,
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
        marginHorizontal: DimensionWidth * 0.05,
        marginVertical: DimensionHeight * 0.05,
        borderRadius: 20,
        width: 140,
        height: 140
    },
    optionTitle:{
        color:"#FFF"
    },
    settings:{
        alignSelf:"flex-end",
        marginTop: DimensionHeight * 0.035,
        marginRight: DimensionWidth * 0.035
    }
});

export default styles;