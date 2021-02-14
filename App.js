import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, FirstScreen, RegistrationScreen} from './Pages';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Splash" component={Splash} />
    //     <Stack.Screen name="Welcome" component={FirstScreen} />
    //     <Stack.Screen name="Daftar" component={RegistrationScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <RegistrationScreen />
  );
};

export default App;
