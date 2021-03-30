/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {
  HomescreenSatgas,
  DeskripsiSatgas,
  ListscreenSatgas,
  ProfilescreenSatgas,
} from '../../index.js';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomestackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreenSatgas"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <HomeStack.Screen
        name="HomeScreenSatgas"
        component={HomescreenSatgas}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DeskripsiSatgas"
        component={DeskripsiSatgas}
        options={{title: 'Deskripsi'}}
      />
    </HomeStack.Navigator>
  );
};
const ListstackScreen = ({navigation}) => {
  return (
    <ListStack.Navigator
      initialRouteName="ListScreenSatgas"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <ListStack.Screen
        name="ListScreenSatgas"
        component={ListscreenSatgas}
        options={{headerShown: false}}
      />
    </ListStack.Navigator>
  );
};
const ProfilestackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreenSatgas">
      <ProfileStack.Screen
        name="ProfileScreenSatgas"
        component={ProfilescreenSatgas}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const DashboardSatgas = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="#e5e5e5"
      backBehavior="none"
      barStyle={{backgroundColor: '#2D4F6C'}}
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomestackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              source={require('../../../Assets/Icons/home.png')}
              style={{height: 28, width: 28}}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="List"
        component={ListstackScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: () => (
            <Image
              source={require('../../../Assets/Icons/list.png')}
              style={{height: 28, width: 28}}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfilestackScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => (
            <Image
              source={require('../../../Assets/Icons/account.png')}
              style={{height: 28, width: 28}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default DashboardSatgas;
