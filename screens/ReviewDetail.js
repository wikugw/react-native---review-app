import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetail({ route, navigation }) {
  const { name, desc, ratings } = route.params
  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Card >
        <Text style={globalStyles.titleText}>{name}</Text>
        <Text style={globalStyles.paragraphText}>{desc}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating: </Text>
          <Image source={images.ratings[ratings]} />
        </View>
      </Card>

      <Button title="go back to home screen" onPress={pressHandler} color="#66b933" />
    </View>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: "center",
    borderTopColor: '#111',
    borderTopWidth: 1
  },
  ratingText: {
    fontWeight: 'bold',
  }
})