import React from "react";
import { Platform, Image } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { createDrawerNavigator} from 'react-navigation-drawer'

import TabBarIcon from "../components/TabBarIcon";
import LotteryScreen from "../screens/Lottery/LotteryScreen";
import SoccerScreen from "../screens/Soccer/SoccerScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import  DrawerScreen from "./menu/DrawerScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const LotteryStack = createStackNavigator(
  {
    Lottery: LotteryScreen,
  },
  config
);

LotteryStack.navigationOptions = {
  tabBarLabel: "Lottery",
  tabBarIcon: ({ focused }) => (
    <Image
      source={require("../assets/images/icon_send.png")}
      style={{ marginBottom: -3, height: 40, width: 40, tintColor: focused ? "#ffc266" : "#fff" }}
    />
  ),
};

LotteryStack.path = "";

const SoccerStack = createStackNavigator(
  {
    Soccer: SoccerScreen,
  },
  config
);

SoccerStack.navigationOptions = {
  tabBarLabel: "Mixed Screens",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-football" : "md-football"} />
  ),
};

SoccerStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} />
  ),
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    LotteryStack,
    SoccerStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      style: { backgroundColor: "black" },
      activeTintColor: "#ffc266",
      inactiveTintColor: "#fff",
      labelStyle: {
        fontWeight: "bold",
      }
    },
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: "none",
    mode: "modal",
    cardStyle: {
      opacity: 1,
    },
  }
);

tabNavigator.path = "";

// export default tabNavigator;

// BottomTabNavigator  inside drawer menu

const DrawerNavigator = createDrawerNavigator({
  MainScreen: {
    screen: tabNavigator
  }
}, {
  initialRouteName: 'MainScreen',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});

const StackNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,

    navigationOptions: ({ navigation }) => ({
      header:null,
    })
  },
});


export default StackNavigator;
