/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouter} from './tabRouter';
import CharacterDetail from '../screens/CharacterDetail';
import FilterScreen from '../screens/FilterScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabRouter} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
