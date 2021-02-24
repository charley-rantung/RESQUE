import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  FirstScreen,
  LoginScreen,
  RegistrationScreen,
  LoginKonsumen,
  DaftarKonsumen,
  DashboardKonsumen,
  LoginManajemen,
  DaftarManajemen,
  LoginSatgas,
  DaftarSatgas,
} from './Pages';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2D4F6C',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Daftar"
          component={RegistrationScreen}
          options={{title: 'Daftar'}}
        />
        {/* UI Konsumen */}
        <Stack.Screen
          name="LoginKonsumen"
          component={LoginKonsumen}
          options={{title: 'Masuk sebagai Konsumen'}}
        />
        <Stack.Screen
          name="DaftarKonsumen"
          component={DaftarKonsumen}
          options={{title: 'Daftar sebagai Konsumen'}}
        />
        <Stack.Screen
          name="DashboardKonsumen"
          component={DashboardKonsumen}
          options={{headerShown: false}}
        />
        {/* UI Manajemen */}
        <Stack.Screen
          name="LoginManajemen"
          component={LoginManajemen}
          options={{title: 'Masuk sebagai Manajemen'}}
        />
        <Stack.Screen
          name="DaftarManajemen"
          component={DaftarManajemen}
          options={{title: 'Daftar sebagai Manajemen'}}
        />
        {/* UI Satgas */}
        <Stack.Screen
          name="LoginSatgas"
          component={LoginSatgas}
          options={{title: 'Masuk sebagai Satgas'}}
        />
        <Stack.Screen
          name="DaftarSatgas"
          component={DaftarSatgas}
          options={{title: 'Daftar sebagai Satgas'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
