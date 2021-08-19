import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#eb8334',
        tabBarIndicatorStyle: {
          backgroundColor: '#eb8334',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResults} />
      <Tab.Screen name={'Map'} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
