import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={'location-pin'} size={30} />
        </View>
        <Text styles={styles.locationText}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SuggestionRow;
