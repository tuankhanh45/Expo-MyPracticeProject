import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LotteryScreen from '../screens/Lottery/LotteryScreen';
import SoccerScreen from '../screens/Soccer/SoccerScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LotteryStack = createStackNavigator(
  {
    Lottery: LotteryScreen,
  },
  config
);

LotteryStack.navigationOptions = {
  tabBarLabel: 'Lottery',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/icon_send.png')}
      style={{ marginBottom: -3, height: 26, width: 26, tintColor: focused ? '#ffc266' : '#fff' }}
    />
  ),
};

LotteryStack.path = '';

const SoccerStack = createStackNavigator(
  {
    Soccer: SoccerScreen,
  },
  config
);

SoccerStack.navigationOptions = {
  tabBarLabel: 'Mixed Screens',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-football' : 'md-football'} />
  ),
};

SoccerStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    LotteryStack,
    SoccerStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      style: { backgroundColor: 'black' },
      activeTintColor: '#ffc266',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontWeight: "bold",
      }
    },
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      opacity: 1,
    },
  }
);

tabNavigator.path = '';

export default tabNavigator;
