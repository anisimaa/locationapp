import { StyleSheet, Dimensions } from "react-native";

const MapStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

export default MapStyles;