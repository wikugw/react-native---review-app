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