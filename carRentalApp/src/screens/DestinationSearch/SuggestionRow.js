import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <AntDesign name={'car'} size={30} />
    </View>
    <Text style={styles.carText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
