import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './HomeStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator
    initialRouteName='Home'
    drawerContentOptions={{
      paddingTop: 40,
      backgroundColor: '#fff',
      activeTintColor: 'green',
      itemStyle: { marginVertical: 5 },
      labelStyle: { fontSize: 18, },
    }}>
    <Screen
      name='Home'
      component={HomeStack}
    />
    <Screen
      name='About'
      component={AboutStack}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);
