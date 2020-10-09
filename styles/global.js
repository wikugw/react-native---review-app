import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#282828'
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#fff'
  },
  paragraphText: {
    fontFamily: 'nunito-regular',
    color: '#fff',
    marginVertical: 8,
    lineHeight: 20
  }
})