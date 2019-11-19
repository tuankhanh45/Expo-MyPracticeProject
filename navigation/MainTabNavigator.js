import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoteryScreen from '../screens/Lotery/LoteryScreen';
import SoccerScreen from '../screens/Soccer/SoccerScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoteryStack = createStackNavigator(
  {
    Lotey: LoteryScreen,
  },
  config
);

LoteryStack.navigationOptions = {
  tabBarLabel: 'Lotery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'? 'ios-card':'md-card'
          // ? `ios-information-circle${focused ? '' : '-outline'}`
          // : 'md-information-circle'
      }
    />
  ),
};

LoteryStack.path = '';

const SoccerStack = createStackNavigator(
  {
    Soccer: SoccerScreen,
  },
  config
);

SoccerStack.navigationOptions = {
  tabBarLabel: 'Soccer',
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

const tabNavigator = createBottomTabNavigator({
  LoteryStack,
  SoccerStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
