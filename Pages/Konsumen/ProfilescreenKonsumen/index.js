/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useDispatch, useSelector} from 'react-redux';

const ProfilescreenKonsumen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref('akunKonsumen/' + globalState.uid)
      .on('value', (snapshot) => {
        setUser(snapshot.val());
      });
  }, []);

  const onPressProfil = () => {
    Alert.alert(
      'Profil',
      `Nama Lengkap: ${user.nama} \nEmail: ${user.email} \nNo. Telp: ${user.noTelp}`,
    );
  };

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
            style={{
              borderBottomWidth: 2,
              marginTop: 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={onPressProfil}>
            <Text style={styles.teksNama}>Profil</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: 2,
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={onPressKeluar}>
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

export default ProfilescreenKonsumen;

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
});
