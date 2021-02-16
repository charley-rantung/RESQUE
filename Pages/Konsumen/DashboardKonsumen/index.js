import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomescreenKonsumen,
  ListscreenKonsumen,
  ProfilescreenKonsumen,
} from '../../index';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomestackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreenKonsumen">
      <HomeStack.Screen
        name="HomeScreenKonsumen"
        component={HomescreenKonsumen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
const ListstackScreen = ({navigation}) => {
  return (
    <ListStack.Navigator initialRouteName="ListScreenKonsumen">
      <ListStack.Screen
        name="ListScreenKonsumen"
        component={ListscreenKonsumen}
        options={{headerShown: false}}
      />
    </ListStack.Navigator>
  );
};
const ProfilestackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreenKonsumen">
      <ProfileStack.Screen
        name="ProfileScreenKonsumen"
        component={ProfilescreenKonsumen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const DashboardKonsumen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomestackScreen} />
      <Tab.Screen name="List" component={ListstackScreen} />
      <Tab.Screen name="Profile" component={ProfilestackScreen} />
    </Tab.Navigator>
  );
};

export default DashboardKonsumen;

const styles = StyleSheet.create({});
