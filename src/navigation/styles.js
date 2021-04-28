import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181919',
    padding: 15,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    backgroundColor: '#7f8587',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    color: 'white',
    fontSize: 24,
  },

  star: {
    color: 'lightgray',
  },

  messagesView: {
    borderTopWidth: 1,
    borderTopColor: '#7d7e7d',
    borderBottomWidth: 1,
    borderBottomColor: '#7d7e7d',
    paddingVertical: 5,
    marginVertical: 10,
  },

  messages: {
    color: 'white',
    paddingVertical: 5,
  },

  do: {
    color: '#8e8f98',
    paddingVertical: 5,
  },

  make: {
    color: 'white',
    paddingVertical: 5,
  },
})

export default styles;