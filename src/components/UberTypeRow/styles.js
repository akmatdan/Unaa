import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },

  time: {
    color: '#4d4b4b'
  },

  rightContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
})

export default styles