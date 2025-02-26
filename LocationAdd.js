import React, {useState} from 'react';
import { db } from './firebase'; 
import { addDoc, collection } from 'firebase/firestore';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import LocationAddStyles from './styles/LocationAddStyles';
import { AntDesign } from '@expo/vector-icons';

const LocationAdd = ({route, navigation }) => {
    const { handleAddLocation } = route.params;
    const [cityName, setCityName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    //adding location cards
    const handleAddCard = async () => {
        if (cityName && description) {
          const newCard = {
            id: Math.random().toString(),
            cityName,
            description,
            rating,
          };
          try {
            // Save the new card to Firestore
            await addDoc(collection(db, 'locations'), newCard);

            handleAddLocation(newCard);
            navigation.goBack(); // Navigate back to the start screen
          } catch (error) {
            console.error('Error adding document: ', error);
          }
        }
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