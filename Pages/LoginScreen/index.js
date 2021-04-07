import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{alignItems: 'center', width: 280}}>
        <Image
          source={require('../../Assets/Images/ResqueLogo1.png')}
          style={styles.image}
        />
        <Text style={[styles.text, {alignSelf: 'flex-start', top: 55}]}>
          Masuk Sebagai:
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginKonsumen')}>
          <Text style={[styles.text, {color: 'white'}]}>Konsumen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'white', marginTop: 23}]}
          onPress={() => navigation.navigate('LoginManajemen')}>
          <Text style={[styles.text, {color: 'black'}]}>Manajemen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'white', marginTop: 23}]}
          onPress={() => navigation.navigate('LoginSatgas')}>
          <Text style={[styles.text, {color: 'black'}]}>Satgas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 230,
    marginTop: 40,
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 63,
  },
  text: {
    fontFamily: 'Raleway-Bold',
    fontWeight: 'bold',
  },
});
