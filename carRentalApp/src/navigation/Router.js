import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import CarGuestScreen from '../screens/CarGuests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          headerMode="none"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your Destination',
          }}
        />

        <Stack.Screen
          name={'Guest'}
          component={CarGuestScreen}
          options={{
            title: 'What Car do you need?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
