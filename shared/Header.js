import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const openDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={28} color="black" style={styles.icon} onPress={openDrawer} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold'
  },
  icon: {
    position: "absolute",
    left: 10
  }
})
