import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResultsScreen} />
      <Tab.Screen name={'map'} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
