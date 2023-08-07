import 'react-native-gesture-handler';
import {View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

//Import Router
import Router from './src/navigation/Router';

//Import Screens
// import HomeScreen from './src/screens/Home';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';

// //Import Components
// import Post from './src/components/Post';

// //import dummy data
// import feed from './assets/data/feed';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
