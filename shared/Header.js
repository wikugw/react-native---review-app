import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const openDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={28} color="black" style={styles.icon} onPress={openDrawer} />
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  icon: {
    position: "absolute",
    left: 10
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 5
  }
})
