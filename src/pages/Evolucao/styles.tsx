import {StyleSheet, Dimensions} from 'react-native';

const DimensionFont = (Dimensions.get("window").fontScale);
const DimensionHeight = (Dimensions.get("window").height);
const DimensionWidth = (Dimensions.get("window").width);

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    title:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 16,
        fontFamily:"Ubuntu_500Medium",
        textAlign:"center",
        marginHorizontal: DimensionWidth * 0.05,
        marginVertical: DimensionWidth * 0.03
    },
    header:{
        marginTop: DimensionHeight * 0.05,
        marginHorizontal:DimensionHeight * 0.02
    },
});

export default styles;