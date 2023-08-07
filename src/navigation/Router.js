import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//import hometabnavigator
import HomeTabNavigator from './HomeTabNavigator';

//import screens
import HomeScreen from '../screens/Home';
import DestinationSearchScreen from '../screens/DestinationSearch';
import SearchResultsScreen from '../screens/SearchResults';
import GuestsScreen from '../screens/Guests';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen name={'Search Results'} component={SearchResultsScreen} />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
