import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const initialState = '';
  const [inputText, setInputText] = useState(initialState);

  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder={'Where are you going?'}
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <AntDesign name={'car'} size={30} />
            </View>
            <Text style={styles.carText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
