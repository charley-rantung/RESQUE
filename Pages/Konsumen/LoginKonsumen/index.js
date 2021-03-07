import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import firebase from '../../../Config/FIREBASE';

const LoginKonsumen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const onPressMasuk = () => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        Alert.alert('Sukses', 'Berhasil Masuk', [
          {
            text: 'Ke halaman utama',
            onPress: () => navigation.navigate('DashboardKonsumen'),
          },
        ]);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert('Error', errorCode + errorMessage);
      });
  };
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
          onChangeText={(resp) => setEmail(resp)}
        />
        <TextInput
          style={[styles.textInput, {marginTop: 15}]}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(resp) => setPass(resp)}
        />
        <TouchableOpacity
          style={[styles.button, {marginTop: 15}]}
          onPress={onPressMasuk}>
          <Text style={[styles.text, {color: 'white'}]}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginKonsumen;

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
