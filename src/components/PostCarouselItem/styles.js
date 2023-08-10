import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
