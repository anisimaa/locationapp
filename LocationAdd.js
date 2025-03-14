import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, } from 'react-native';
import LocationAddStyles from './styles/LocationAddStyles';
import { AntDesign } from '@expo/vector-icons';
import Geocoder from "react-native-geocoding";
import { GOOGLE_MAPS_API_KEY } from "@env";

Geocoder.init(GOOGLE_MAPS_API_KEY);

const LocationAdd = ({route, navigation }) => {
    const { handleAddLocation } = route.params;
    const [cityName, setCityName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    //adding location cards
    const handleAddCard = async () => {
      if (!cityName || !description) {
        alert('Please provide both city name and description.');
        return;  
      }
          const newCard = {
            id: Math.random().toString(),
            cityName,
            description,
            rating,
          };
    
          handleAddLocation(newCard); // Add the card to the list
          navigation.goBack(); // Navigate back to LocationStart
          setCityName("");
          setDescription("");
          setRating(0);
    };

    return (
        <View style={LocationAddStyles.formContainer}>

        <View style={LocationAddStyles.inputContainer}>
            <TextInput style={LocationAddStyles.input}
              onChangeText={setCityName}
              value={cityName}
              placeholder="Name"
              placeholderTextColor="#999"
            />

            <TextInput style={LocationAddStyles.input}
              onChangeText={setDescription}
              value={description}
              placeholder="Description"
              placeholderTextColor="#999"
            />

        {/* rating */}
        <View style={LocationAddStyles.starsContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setRating(index + 1)} 
          >
            <AntDesign
              name={index < rating ? 'star' : 'staro'}
              size={30}
              color={index < rating ? 'gold' : 'gray'} 
              style={LocationAddStyles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

        {/* this button adds the cards to the start screen */}
        <TouchableOpacity style={LocationAddStyles.button} onPress={handleAddCard}>
          <Text style={LocationAddStyles.buttonTxt}>Add</Text>
        </TouchableOpacity>
        </View>
        </View>
      );
};

export default LocationAdd;