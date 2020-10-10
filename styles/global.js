import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#282828',
    textAlign: "center"
  },
  paragraphText: {
    fontFamily: 'nunito-regular',
    color: '#282828',
    marginVertical: 8,
    lineHeight: 20,
    textAlign: 'center'
  }
})