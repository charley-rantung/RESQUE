import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {
  HomescreenKonsumen,
  DeskripsiKonsumen,
  PemesananKonsumen,
  MenungguKonfirmasi,
  KonfirmasiSelesai,
  Catatan,
  PembayaranKonsumen,
  ListscreenKonsumen,
  ProfilescreenKonsumen,
} from '../../index';

const Tab = createMaterialBottomTabNavigator();
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
        options={{headerShown: true, headerTitle: 'Deskripsi'}}
      />
      <HomeStack.Screen
        name="MenungguKonfirmasi"
        component={MenungguKonfirmasi}
        options={{headerShown: true, headerTitle: 'Waiting...'}}
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
      {/* <ListStack.Screen
        name="ListScreenKonsumen"
        component={ListscreenKonsumen}
        options={{headerShown: false}}
      /> */}
      <ListStack.Screen
        name="KonfirmasiSelesai"
        component={KonfirmasiSelesai}
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

export default DashboardKonsumen;
