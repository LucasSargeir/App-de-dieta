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
    header:{
        marginTop: DimensionHeight * 0.05,
        marginHorizontal:15
    },
    visoes:{
        flexDirection: "row",
        justifyContent:"flex-end",
        marginRight: DimensionWidth * 0.065,
        marginTop: DimensionHeight * 0.022
    },
    visao:{
        backgroundColor:"#1e1041",
        borderColor: "#8169be",
        borderWidth: 2,
        borderRadius: DimensionWidth * 1,
        margin: DimensionWidth * 0.01,
        padding: DimensionWidth * 0.03,
        width: DimensionWidth * 0.099,
        height: DimensionWidth * 0.099,
        justifyContent: "center",
        alignItems:"center",
    },
});

export default styles;