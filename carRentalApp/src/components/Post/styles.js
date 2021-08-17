import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 60 / 40,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  seats: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
    
  },
  dailyPrice: {
    color: '#80838a',
    fontWeight: 'bold',
  },
  daily: {
    fontSize: 14,
    color: '#80838a',
  },
  monthlyPrice: {
    fontWeight: 'bold',
  },
  monthly: {
    fontSize: 14,
  },
  totalPrice: {
    color: '#80838a',
    textDecorationLine: 'underline',
  },
});

export default styles;
