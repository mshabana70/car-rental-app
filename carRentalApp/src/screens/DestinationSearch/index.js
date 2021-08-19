import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import searchResults from '../../../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input Component */}
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guest');
        }}
        fetchDetails={true}
        minLength={0}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyAe4gUrBNU4OLvi_yWwXw5673mEc0m-9dI',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
      {/* List of destinations */}
    </View>
  );
};

export default DestinationSearchScreen;
