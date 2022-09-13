import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../Screens/Transaction";
import SearchScreen from "../Screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Transação") {
                iconName = "book";
              } else if (route.name === "Pesquisa") {
                iconName = "search";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 150,
              borderTopWidth: 0,
              backgroundColor: "#A5267D",
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold",
            },
            labelPosition: "beside-icon",
            tabStyle: {
              marginTop: 5,
              marginLeft: 15,
              MarginRight: 15,
              borderRadius: 20,
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#A5267D",
            },
          }}
        >
          <Tab.Screen name="Transação" component={TransactionScreen} />
          <Tab.Screen name="Pesquisa" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
