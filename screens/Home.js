import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { name: 'fantasy life', ratings: 1, desc: 'lorem ipsum', key: '1' },
    { name: 'pokemon x', ratings: 2, desc: 'lorem ipsum 2', key: '2' },
    { name: 'pokemon omega ruby', ratings: 3, desc: 'lorem ipsum 3', key: '3' },
    { name: 'pokemon sun', ratings: 4, desc: 'lorem ipsum 4', key: '4' },
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Rerview Details', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  )
}
