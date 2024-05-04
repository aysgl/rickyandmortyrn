/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/Characters';
import Episodes from '../screens/Episodes';
import Locations from '../screens/Locations';

import {
  DocumentFilter,
  Location,
  PlayCircle,
  Profile2User,
  Setting4,
} from 'iconsax-react-native';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function TabRouter() {
  const navigation = useNavigation();
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
        component={Characters}
        options={{
          title: 'Ricky and Morty',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('FilterScreen')}>
              <DocumentFilter
                style={{marginEnd: 15}}
                size="22"
                color="tomato"
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Locations" component={Locations} />
      <Tab.Screen name="Episodes" component={Episodes} />
    </Tab.Navigator>
  );
}
