import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ route, navigation }) {
  const { name, desc, ratings } = route.params
  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Card >
        <Text style={globalStyles.titleText}>{name}</Text>
        <Text style={globalStyles.paragraphText}>{desc}, and the rating is : {ratings}</Text>
      </Card>

      <Button title="go back to home screen" onPress={pressHandler} />
    </View>
  )
}