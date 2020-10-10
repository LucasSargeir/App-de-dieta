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
    information:{
        flexDirection:"row",
        margin: 40,
        justifyContent:"space-around",
        flexWrap:"wrap"
    },
    informationText:{
        color:"#FFeeFF",
        fontFamily:"Ubuntu_500Medium",
        fontSize: 13,
        marginHorizontal:10,
        marginVertical: 10
    },
    alimentos:{
        alignItems:"center",
    },
    alimentosTitle:{
        color:"#FFeeFF",
        fontFamily:"Ubuntu_500Medium",
        fontSize: 17,
        marginBottom: 20
    }
});

export default styles;