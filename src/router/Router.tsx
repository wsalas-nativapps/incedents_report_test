import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../types/Type";
import { ROUTE } from "../constants/Route";
/* Pages */
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home";
import NewReport from "../pages/new_report/NewReport";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const tabScreenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: "white",
  headerTitle: "Incedents Report",
  headerTintColor: "white",
  headerTitleAlign: "center",
  headerStyle: { backgroundColor: "#0c0e3c" },
  tabBarStyle: { backgroundColor: "#0c0e3c" },
  unmountOnBlur: true,
};

const stackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const TabNavigator: React.FC = () => (
  <Tab.Navigator screenOptions={tabScreenOptions}>
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
      name={ROUTE.Home}
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: "Create Report",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document" color={color} size={size} />
        ),
      }}
      name={ROUTE.NewReport}
      component={NewReport}
    />
  </Tab.Navigator>
);

const StackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name={ROUTE.Landing} component={Landing} />
    <Stack.Screen name={ROUTE.HomeTab} component={TabNavigator} />
  </Stack.Navigator>
);

const Router: React.FC = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Router;
