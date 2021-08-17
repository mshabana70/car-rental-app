/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Entype from 'react-native-vector-icons/Entypo';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/searchResults';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <Post post={post2} /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
