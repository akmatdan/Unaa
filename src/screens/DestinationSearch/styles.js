import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // for index.js
  container: {
    padding: 10,
    height: '100%',
    width: '100%',
  },

  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  separator: {
    height: 1,
    backgroundColor: '#dbe1e7'
  },

  listView: {
    position: 'absolute',
    top: 102,
  },

  // for PlaceRow
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 15,
    marginRight: 15,
  },

  locationText: {},

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 23,
    left: 14.7,
    borderRadius: 15,
  },

  line: {
    width: 1,
    height: 44.5,
    backgroundColor: '#a7a7aa',
    position: 'absolute',
    top: 30.5,
    left: 16.5,
  },

  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 77,
    left: 15,
  },
});

export default styles;