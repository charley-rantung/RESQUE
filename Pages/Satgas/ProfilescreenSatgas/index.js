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

const ProfilescreenSatgas = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref('akunSatgas/' + globalState.uid)
      .on('value', (snapshot) => {
        setUser(snapshot.val());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {/* Button Profil */}
          <TouchableOpacity style={styles.menu} onPress={onPressProfil}>
            <Text style={styles.teksNama}>Profil</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          {/* Button Keluar */}
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

export default ProfilescreenSatgas;

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
