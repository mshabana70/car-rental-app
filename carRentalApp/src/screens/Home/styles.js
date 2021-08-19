import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    padding: 20,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 35,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    // Width of screen minus margin from left and right vvv
    width: Dimensions.get('screen').width - 20,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
