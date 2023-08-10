import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

//DOTENV
// import dotenv from 'dotenv';
// dotenv.config();

// const GOOGLE_MAPS_APIKEY = process.env.GOOGLE_MAPS_APIKEY;

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        styles={{
          textInput: styles.textInput,
        }}
        fetchDetails
        query={{
          key: 'AIzaSyD4YbMBWigt6qgNCu9JfL6h4QBO8ZbIn-Y',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
