import {StyleSheet, Dimensions} from 'react-native';

const DimensionFont = (Dimensions.get("window").fontScale)
const DimensionHeight = (Dimensions.get("window").height)
const DimensionWidth = (Dimensions.get("window").width)

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingBottom: DimensionHeight * 0.03,
        flexDirection: "column",
        justifyContent:'space-between'
    },
    title:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 16,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal: DimensionWidth * 0.1
    },
    header:{
        marginTop: DimensionHeight * 0.05,
        marginHorizontal: DimensionWidth * 0.04
    },
    information:{
        paddingHorizontal:DimensionWidth * 0.08,
        marginTop: DimensionHeight * 0.03
    },
    textInformation:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 18,
        fontFamily:"Ubuntu_500Medium"
    }
});

export default styles;