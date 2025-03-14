import { StyleSheet } from "react-native";

const LocationStartStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',  
    },
    
    buttonContainer: {
        alignItems: 'center',  
        backgroundColor: 'rgb(240, 240, 240)',
        width: '80%'
    },
    
    button: {
        backgroundColor: 'rgb(18, 18, 17)',
        borderRadius: 10,
        width: '80%',
        margin: 15,
        paddingTop: 20,
        paddingBottom: 20,
      },

      mapButton: {
        fontSize: 16,
        color: 'rgba(80, 79, 79, 0.38)',
      },

    buttonTxt: {
        color: '#FFFFFF',
        textAlign: 'center',

    },

    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.87)', 
        padding: 20,
        borderRadius: 10,  
        minWidth: '80%',        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: 15,
      },

      cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
      },
      cardText: {
        fontSize: 16,
        color: 'rgba(80, 79, 79, 0.38)',
        marginTop: 10,
      },

      starsContainer: {
        flexDirection: 'row', 
        marginVertical: 20,
      },
      star: {
        marginHorizontal: 5, 
      },
    
});

export default LocationStartStyles;