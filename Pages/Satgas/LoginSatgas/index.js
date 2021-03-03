import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const LoginSatgas = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{alignItems: 'center', width: 280}}>
        <Image
          source={require('../../../Assets/Images/ResqueLogo1.png')}
          style={styles.image}
        />
        <Text
          style={[styles.text, {alignSelf: 'flex-start', top: 55, opacity: 0}]}>
          Masuk Sebagai:{' '}
        </Text>
        <TextInput
          style={[styles.textInput, {marginTop: 63}]}
          placeholder="Email"
        />
        <TextInput
          style={[styles.textInput, {marginTop: 15}]}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.button, {marginTop: 15}]}
          onPress={() => navigation.navigate('DashboardSatgas')}>
          <Text style={[styles.text, {color: 'white'}]}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSatgas;

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
  textInput: {
    borderWidth: 2,
    borderColor: '#2D4F6C',
    borderRadius: 10,
    height: 40,
    width: 280,
    paddingLeft: 20,
  },
});
