import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About'
import Header from '../shared/Header'


const { Navigator, Screen } = createStackNavigator();

function AboutStack({ navigation }) {
  return (
    <Navigator>
      <Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header navigation={navigation} title="About" />,
          headerStyle: {
            backgroundColor: '#66b933',
            height: 100
          }
        }}
      />
    </Navigator>
  )
}

export default AboutStack
