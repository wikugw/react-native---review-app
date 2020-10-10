import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 20,
    color: '#282828',
    textAlign: "center"
  },
  paragraphText: {
    fontFamily: 'nunito-regular',
    color: '#282828',
    marginVertical: 8,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: '#ddd',
    fontSize: 18,
    marginVertical: 10
  },
  errorText: {
    color: "crimson",
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#66b933',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  textButton: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#fff'
  }
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}