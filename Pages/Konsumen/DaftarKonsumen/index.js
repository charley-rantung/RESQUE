/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Platform,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useDispatch, useSelector} from 'react-redux';

const DaftarKonsumen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nohp, setNohp] = useState(0);
  const [password, setPass] = useState('');
  useEffect(() => {
    console.log('Dari useeffect', globalState);
  }, [globalState]);

  const onPressDaftar = () => {
    if (nama) {
      if (nohp && nohp.length >= 7) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((resp) => {
            dispatch({type: 'SET_UID', value: resp.user.uid});
            console.log('dari respon api:', resp.user.uid);
            Alert.alert('Sukses', 'Berhasil Mendaftar', [
              {
                text: 'Ke halaman utama',
                onPress: () => navigation.navigate('DashboardKonsumen'),
              },
            ]);
            firebase
              .database()
              .ref('akunKonsumen/' + resp.user.uid)
              .set({
                nama: nama,
                noTelp: nohp,
                email: email,
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Platform.OS === 'ios'
              ? Alert.alert(errorCode, errorMessage)
              : ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
          });
      } else {
        Platform.OS === 'ios'
          ? Alert.alert('Perhatian', 'Masukan nomor telepon!')
          : ToastAndroid.show('Masukan nomor telepon!', ToastAndroid.SHORT);
      }
    } else {
      Platform.OS === 'ios'
        ? Alert.alert('Perhatian', 'Masukan nama lengkap!')
        : ToastAndroid.show('Masukan nama lengkap!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
      <View style={styles.gap}>
        <Text>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          value={nama}
          onChangeText={(resp) => setNama(resp)}
        />
      </View>
      <View style={styles.gap}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(resp) => setEmail(resp)}
        />
      </View>
      <View style={styles.gap}>
        <Text>No. telp</Text>
        <TextInput
          style={styles.input}
          value={nohp}
          keyboardType={'number-pad'}
          onChangeText={(resp) => setNohp(resp)}
        />
        {nohp.length > 0 && nohp.length < 7 ? (
          <View>
            <Text style={{fontSize: 12, color: '#cf1414'}}>
              Nomor tidak valid
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.gap}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(resp) => setPass(resp)}
        />
      </View>

      <TouchableOpacity
        style={[styles.button2, {alignSelf: 'center'}]}
        onPress={onPressDaftar}>
        <Text style={[styles.text, {color: 'white'}]}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DaftarKonsumen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    borderColor: '#2D4F6C',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    height: 32,
    width: 67,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  button2: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  gap: {
    marginTop: 10,
  },
});
