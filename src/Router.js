import React from "react";
import { AsyncStorage, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Wellcome from "./containers/Wellcome";
import Mark from "./containers/Mark";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const hasOnboarded = () => {
  const data = AsyncStorage.getItem("hasOnboarded");
  return !!data;
};

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Schedule") {
            iconName = focused ? "clockcircle" : "clockcircleo";
            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === "Mark") {
            iconName = focused ? "book-open" : "book-open-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Schedule"
        component={Home}
        options={{
          tabBarLabel: "Lịch Học".toUpperCase(),
        }}
      />
      <Tab.Screen
        name="Mark"
        component={Mark}
        options={{
          tabBarLabel: "Điểm".toUpperCase(),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Main" component={MainApp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
