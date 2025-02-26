import { StyleSheet } from "react-native";

const LocationAddStyles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',  
        backgroundColor: 'rgb(240, 240, 240)',
        marginTop: 20,
    },

    input: {
        width:'80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        fontSize: 16,
        zIndex:1000,
  },

  button: {
    backgroundColor: 'rgb(18, 18, 17)',
    borderRadius: 10,
    width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
  },

  buttonTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
},

formContainer: {
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
},

starsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginVertical: 20,
  },
  star: {
    marginHorizontal: 5, 
  },

  
});

export default LocationAddStyles;