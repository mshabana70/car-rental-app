import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 40}]}>
      {/* Image */}
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{url: post.image}} />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Car Doors & Seats */}
          <Text style={styles.seats}>
            {post.door} Door - {post.seat} Seats
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type} - {post.title}
          </Text>

          {/* Daily & Weekly Rate */}
          <Text style={styles.prices}>
            <Text style={styles.dailyPrice}>${post.dailyPrice} </Text>
            <Text style={styles.daily}>/day</Text>
            <Text style={styles.monthlyPrice}> ${post.monthlyPrice} </Text>
            <Text style={styles.monthly}>/month</Text>
          </Text>

          {/* Total Price */}
          {/* <Text style={styles.totalPrice}>${post.totalPrice} Total</Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
