/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from 'react-native-date-picker';
import firebase from '../../../Config/firebase';
import {useDispatch, useSelector} from 'react-redux';

const DaftarManajemen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [nama, setNama] = useState(0);
  const [email, setEmail] = useState(0);
  const [nohp, setNohp] = useState(0);
  const [password, setPass] = useState(0);
  useEffect(() => {
    console.log('Dari useeffect', globalState);
  }, [globalState]);

  const onPressDaftar = () => {
    if (nama) {
      if (nohp) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((resp) => {
            dispatch({type: 'SET_UID', value: resp.user.uid});
            console.log('dari respon api:', resp.user.uid);
            Alert.alert('Sukses', 'Berhasil Mendaftar', [
              {
                text: 'Ke halaman utama',
                onPress: () => navigation.navigate('DashboardManajemen'),
              },
            ]);
            firebase
              .database()
              .ref('akunManajemen/' + resp.user.uid)
              .set({
                nama: nama,
                noTelp: nohp,
                email: email,
                namaBanquet: '-',
                lokasiBanquet: '-',
                noTelpBanquet: 0,
                operasionalBanquet: '-',
                kapasitasBanquet: {
                  min: 0,
                  max: 0,
                },
                hargaMinBanquet: 0,
                gambarBanquet: '-',
                paketBanquet: '-',
                noRekBanquet: {
                  bni: 0,
                  bri: 0,
                  mandiri: 0,
                  bca: 0,
                },
                deskripsiBanquet: '-',
                chseBase64: '-',
                verified: false,
                dataFilled: false,
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert('Error', errorCode + errorMessage);
          });
      } else {
        Alert.alert('Perhatian', 'Masukan nomor telepon!');
      }
    } else {
      Alert.alert('Perhatian', 'Masukan nama lengkap!');
    }
    console.log(email, password);
  };

  return (
    <View style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
      <View style={styles.gap}>
        <Text>Nama Lengkap Pemilik</Text>
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
        <Text>No. HP Pemilik</Text>
        <TextInput
          style={styles.input}
          value={nohp}
          onChangeText={(resp) => setNohp(resp)}
        />
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

export default DaftarManajemen;

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
