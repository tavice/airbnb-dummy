import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Guests')}>
      {/* input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* list of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text styles={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </Pressable>
  );
};

export default DestinationSearchScreen;
