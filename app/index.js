import React from 'react';
import Router from './navigator/router';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigator/DrawerNavigator';
import RouterNavigation from './navigator/router';
import HomeScreen from './pages/Home';
import AboutScreen from './pages/About';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {cBlack, cWhite} from './components/styles/color';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './pages/Landpads/LandpadsDetail';
import LaunchesDetailScreen from './pages/Launches/LaunchesDetail/index';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: cBlack,
          },
          headerTintColor: cWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={DrawerNavigator}
        />

        <Stack.Screen
          options={{title: 'Detail'}}
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          options={{title: 'LaunchesDetail'}}
          name="LaunchesDetail"
          component={LaunchesDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
