import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  console.log(navigation)

  const handlePress = () => {
    // navigation.navigate('Rerview Details')
    navigation.push('Rerview Details')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Text style={globalStyles.paragraphText}>Home screen</Text>
      <Button title='go to details' onPress={handlePress} />
    </View>
  )
}
