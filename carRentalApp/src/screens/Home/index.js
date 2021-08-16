import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search btn clicked')}>
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
          onPress={() => console.warn('Explore btn clicked')}>
          <Text style={styles.buttonText}>Explore our Cars</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;