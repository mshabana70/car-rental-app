/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Entype from 'react-native-vector-icons/Entypo';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import CarGuestScreen from './src/screens/CarGuests';
import Post from './src/components/Post';
import feed from './assets/data/feed';

import Router from './src/navigation/Router';

const post1 = feed[0];
const post2 = feed[1];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
