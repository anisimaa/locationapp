import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import LocationStartStyles from './styles/LocationStartStyles';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const LocationStart = () => {
    const [cards, setCards] = useState([]); 
    const navigation = useNavigation();

    // Add new card to list
    const handleAddLocation = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]); 
      };

      // rendering rated stars
      const renderStars = (rating) => {
        return (
            <View style={LocationStartStyles.starsContainer}>
                {Array.from({ length: 5 }, (_, index) => (
                    <AntDesign
                        key={index}
                        name={index < rating ? 'star' : 'staro'} 
                        size={20}
                        color={index < rating ? 'gold' : 'gray'} 
                        style={LocationStartStyles.star}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={LocationStartStyles.container}>
        <View style={[LocationStartStyles.buttonContainer]}>
            <TouchableOpacity style={[LocationStartStyles.button]} onPress={() => navigation.navigate('Add', { handleAddLocation })}>
                <Text style={[LocationStartStyles.buttonTxt]}>Add new location</Text>
            </TouchableOpacity>
        </View>

    <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={LocationStartStyles.card}>
            <Text style={LocationStartStyles.cardTitle}>{item.cityName}</Text>
            <Text style={LocationStartStyles.cardText}>{item.description}</Text>
            {renderStars(item.rating)}
          </View>
        )}
      />
       
        </View>       
      );
};

export default LocationStart;