import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useDispatch} from 'react-redux';

const ProfilescreenManajemen = ({navigation}) => {
  const dispatch = useDispatch();
  const onPressKeluar = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: 'SET_UID', value: null});
        navigation.popToTop();
      })
      .catch((error) => {
        Alert.alert('Perhatian!', 'Coba lagi');
      });
  };
  return (
    <View>
      <View
        style={{
          width: '90%',
          height: '100%',
          alignSelf: 'center',
          marginTop: 28,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../Assets/Icons/ResqueIcon.png')}
            style={styles.profil}
          />
          <Text style={styles.teksNama}>RESQUE v0.1</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.navigate('ProfilTab')}>
            <Text style={styles.teksNama}>Profil</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.navigate('SertifikatTab')}>
            <Text style={styles.teksNama}>Sertifikat CHSE</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.navigate('DataUsahaTab')}>
            <Text style={styles.teksNama}>Data Usaha</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.navigate('DaftarPaket')}>
            <Text style={styles.teksNama}>Daftar Paket</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={onPressKeluar}>
            <Text style={styles.teksNama}>Keluar</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilescreenManajemen;

const styles = StyleSheet.create({
  profil: {
    height: 60,
    width: 60,
    marginRight: 35,
    resizeMode: 'contain',
  },
  teksNama: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    borderBottomWidth: 2,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
