import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import global, { globalStyles } from '../styles/global'
export default function button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.button}>
        <Text style={globalStyles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
