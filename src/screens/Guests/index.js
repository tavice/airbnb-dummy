import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subtitle}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonContainer}>
            {/* - */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.value}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.subtitle}>Ages 2 to 12</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.value}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.subtitle}>Ages under 2</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.value}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={{
            marginBottom: 50,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
