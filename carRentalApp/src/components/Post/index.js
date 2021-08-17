import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={require('../../../assets/images/chevyCamero.jpg')}
      />

      {/* Car Doors & Seats */}
      <Text style={styles.seats}>2 Door - 4 Seats</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        2020 Chevy Camero ZL1 - 650-horsepower supercharged V8 and enough aero
        enhancements and trick tech features to please an Indy Car engineer.
      </Text>

      {/* Daily & Weekly Rate */}
      <Text style={styles.prices}>
        <Text style={styles.dailyPrice}>$115 </Text>
        <Text style={styles.daily}>/day</Text>
        <Text style={styles.monthlyPrice}>  $2500 </Text>
        <Text style={styles.monthly}>/month</Text>
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>$47,500 Total</Text>
    </View>
  );
};

export default Post;
