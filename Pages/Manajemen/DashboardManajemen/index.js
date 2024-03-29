import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {
  HomescreenManajemen,
  CatatanManajemen,
  ListscreenManajemen,
  DetailTransaksiManajemen,
  ProfilescreenManajemen,
  ProfilTab,
  SertifikatTab,
  DataUsahaTab,
  DaftarPaketManajemen,
} from '../../index.js';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomestackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreenManajemen"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <HomeStack.Screen
        name="HomeScreenManajemen"
        component={HomescreenManajemen}
        options={{headerShown: true, headerTitle: 'RESQUE', headerLeft: null}}
      />
      <HomeStack.Screen
        name="CatatanManajemen"
        component={CatatanManajemen}
        options={{title: 'Berikan Catatan'}}
      />
    </HomeStack.Navigator>
  );
};
const ListstackScreen = ({navigation}) => {
  return (
    <ListStack.Navigator
      initialRouteName="ListScreenManajemen"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <ListStack.Screen
        name="ListScreenManajemen"
        component={ListscreenManajemen}
        options={{headerShown: false}}
      />
      <ListStack.Screen
        name="DetailTransaksiManajemen"
        component={DetailTransaksiManajemen}
        options={{headerShown: true, title: 'Detail Transaksi'}}
      />
    </ListStack.Navigator>
  );
};
const ProfilestackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileScreenManajemen"
      screenOptions={{
        headerStyle: {backgroundColor: '#2D4F6C'},
        headerTintColor: '#ffffff',
      }}>
      <ProfileStack.Screen
        name="ProfileScreenManajemen"
        component={ProfilescreenManajemen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="ProfilTab"
        component={ProfilTab}
        options={{title: 'Profil'}}
      />
      <ProfileStack.Screen
        name="SertifikatTab"
        component={SertifikatTab}
        options={{title: 'CHSE'}}
      />
      <ProfileStack.Screen
        name="DataUsahaTab"
        component={DataUsahaTab}
        options={{title: 'Lengkapi Data Usaha'}}
      />
      <ProfileStack.Screen
        name="DaftarPaket"
        component={DaftarPaketManajemen}
        options={{title: 'Paket'}}
      />
    </ProfileStack.Navigator>
  );
};

const DashboardManajemen = () => {
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
      <Tab.Screen
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

export default DashboardManajemen;
