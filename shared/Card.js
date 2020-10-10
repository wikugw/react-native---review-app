import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#66b933',
    marginVertical: 10,
    borderRadius: 6,
    elevation: 6,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowColor: 'black'
  },
  cardContent: {
    backgroundColor: '#66b933',
    marginHorizontal: 10,
    marginVertical: 15
  }
})