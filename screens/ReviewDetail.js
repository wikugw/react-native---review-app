import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation }) {
  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetail screen</Text>
      <Text style={globalStyles.paragraphText}>ReviewDetail screen</Text>
      <Button title="go back to home screen" onPress={pressHandler} />
    </View>
  )
}