import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        // google auto complete not working????
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#eb8334'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/carBackground.jpg')}
        style={styles.image}>
        {/* Title Text */}
        <Text style={styles.title}>Go Near</Text>
        {/* Explore Button */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Guest')}>
          <Text style={styles.buttonText}>Explore our Cars</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
