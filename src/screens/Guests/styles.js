import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: '#5b5b5b',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#474747',
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
    color: '#474747',
  },
});

export default styles;
