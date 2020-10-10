import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetail";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
  <Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#66b933',
      height: 100
    }
  }}
  >
    <Screen name="Home" component={Home} options={{ headerTitle: () => <Header navigation={navigation} title="Game Review" /> }} />
    <Screen name="Rerview Details" component={ReviewDetails} options={{ title: 'Review Details' }} />
  </Navigator>
);