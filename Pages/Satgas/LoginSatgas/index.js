/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useDispatch, useSelector} from 'react-redux';

const LoginSatgas = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  useEffect(() => {
    console.log('Dari useEffect', globalState.uid);
  }, [globalState]);

  const onPressMasuk = () => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        dispatch({type: 'SET_UID', value: resp.user.uid});
        console.log('dari respon api:', resp.user.uid);
        firebase
          .database()
          .ref('akunSatgas/' + resp.user.uid)
          .on('value', (snapshot) => {
            console.log('isi snapshot', snapshot.val());
            if (snapshot.val()) {
              Alert.alert('Sukses', 'Berhasil Masuk', [
                {
                  text: 'Ke halaman utama',
                  onPress: () => navigation.navigate('DashboardSatgas'),
                },
              ]);
            } else {
              Alert.alert('Gagal', 'Email ini tidak terdaftar sebagai Satgas');
              dispatch({type: 'SET_UID', value: snapshot.val()});
            }
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert('Kesalahan', errorCode + errorMessage);
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
