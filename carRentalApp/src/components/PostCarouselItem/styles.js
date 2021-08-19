import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    //width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    //borderRadius: 10,
  },
  seats: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
    //lineHeight: 25,
  },
  prices: {
    fontSize: 15,
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
