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
    list:{
        flex:1,
        marginTop:DimensionHeight * 0.07,
        marginHorizontal: DimensionWidth * 0.07
    },
    textSetting:{
        color:"#FFeeFF",
        fontSize: DimensionFont * 15,
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
        marginBottom: 8,
    },
});

export default styles;