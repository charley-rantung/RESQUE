import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {
  HomescreenKonsumen,
  DeskripsiKonsumen,
  PemesananKonsumen,
  PembayaranKonsumen,
  ListscreenKonsumen,
  Catatan,
  DetailTransaksiKonsumen,
  ProfilescreenKonsumen,
} from '../../index';

const BotTab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomestackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreenKonsumen"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <HomeStack.Screen
        name="HomeScreenKonsumen"
        component={HomescreenKonsumen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DeskripsiKonsumen"
        component={DeskripsiKonsumen}
        options={{headerShown: true, headerTitle: 'Deskripsi'}}
      />
      <HomeStack.Screen
        name="PemesananKonsumen"
        component={PemesananKonsumen}
        options={{headerShown: true, headerTitle: 'Reservasi'}}
      />
    </HomeStack.Navigator>
  );
};
const ListstackScreen = ({navigation}) => {
  return (
    <ListStack.Navigator
      initialRouteName="ListScreenKonsumen"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <ListStack.Screen
        name="ListScreenKonsumen"
        component={ListscreenKonsumen}
        options={{headerShown: false}}
      />
      <ListStack.Screen
        name="Catatan"
        component={Catatan}
        options={{headerShown: true}}
      />
      <ListStack.Screen
        name="PembayaranKonsumen"
        component={PembayaranKonsumen}
        options={{headerShown: true, headerTitle: 'Pembayaran'}}
      />
      <ListStack.Screen
        name="DetailTransaksiKonsumen"
        component={DetailTransaksiKonsumen}
        options={{headerShown: true, headerTitle: 'Detail Transaksi'}}
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
    <BotTab.Navigator
      initialRouteName="Home"
      inactiveColor="#a7a7a7"
      activeColor="#fff"
      backBehavior="none"
      barStyle={{backgroundColor: '#2D4F6C'}}
      shifting={true}>
      <BotTab.Screen
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
      <BotTab.Screen
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
      />
      <BotTab.Screen
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
    </BotTab.Navigator>
  );
};

export default DashboardKonsumen;
