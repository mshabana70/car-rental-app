import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 8,
    borderRadius: 10,
    marginRight: 15,
  },
  cardText: {
    fontWeight: 'bold',
  },
});

export default styles;
