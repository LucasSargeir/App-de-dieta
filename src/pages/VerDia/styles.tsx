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
        marginHorizontal: DimensionWidth * 0.03
    },
    information:{
        flexDirection:"row",
        margin: DimensionWidth * 0.03,
        justifyContent:"space-around",
        flexWrap:"wrap"
    },
    informationText:{
        color:"#FFeeFF",
        fontFamily:"Ubuntu_500Medium",
        fontSize: DimensionFont * 12,
        marginHorizontal: DimensionWidth * 0.01,
        marginVertical: DimensionHeight * 0.01
    },
    alimentos:{
        alignItems:"center",
    },
    alimentosTitle:{
        color:"#FFeeFF",
        fontFamily:"Ubuntu_500Medium",
        fontSize: DimensionFont * 17,
        marginBottom: 20
    }
});

export default styles;