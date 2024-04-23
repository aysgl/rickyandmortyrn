/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/Characters';
import Episodes from '../screens/Episodes';
import Locations from '../screens/Locations';
import Settings from '../screens/Settings';

import {
  Location,
  PlayCircle,
  Profile2User,
  Setting4,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

export function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconComponent;

          if (route.name === 'Characters') {
            iconComponent = (
              <Profile2User
                variant={focused ? 'Bulk' : 'Linear'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Locations') {
            iconComponent = (
              <Location
                variant={focused ? 'Bulk' : 'Linear'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Episodes') {
            iconComponent = (
              <PlayCircle
                variant={focused ? 'Bulk' : 'Linear'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            iconComponent = (
              <Setting4
                variant={focused ? 'Bulk' : 'Linear'}
                size={size}
                color={color}
              />
            );
          }

          return iconComponent;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {display: 'none'},
        tabBarStyle: {display: 'flex'},
      })}>
      <Tab.Screen
        name="Characters"
        options={{title: 'Ricky and Morty'}}
        component={Characters}
      />
      <Tab.Screen name="Locations" component={Locations} />
      <Tab.Screen name="Episodes" component={Episodes} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
