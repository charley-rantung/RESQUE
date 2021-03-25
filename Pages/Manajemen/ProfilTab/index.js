/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useDispatch, useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const ProfilTab = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref('akunManajemen/' + globalState.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView style={{width: '100%'}}>
      {/* Album Scroll */}
      {console.log(userData)}
      <ScrollView horizontal pagingEnabled style={{width: '100%'}}>
        <Image
          source={require('../../../Assets/Images/banquet1.jpg')}
          style={styles.album}
        />
        <Image
          source={require('../../../Assets/Images/banquet2.jpg')}
          style={styles.album}
        />
        {userData.gambarBanquet && (
          <Image
            source={{uri: 'data:image/jpeg;base64,' + userData.gambarBanquet}}
            style={styles.album}
          />
        )}
      </ScrollView>

      <View style={{marginHorizontal: 15, marginTop: 5}}>
        {userData.namaBanquet && (
          <Text style={styles.title}>{userData.namaBanquet}</Text>
        )}
        {userData.lokasiBanquet && (
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../Assets/Icons/location.png')}
              style={{height: 20, width: 20, marginRight: 5}}
            />
            <Text style={styles.deskripsi}>{userData.lokasiBanquet}</Text>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Sertifikat CHSE</Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 50,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#797979',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Lihat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Waktu Operasional</Text>
        {userData.operasionalBanquet && (
          <Text style={styles.deskripsi}>{userData.operasionalBanquet}</Text>
        )}
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Kapasitas</Text>
        {userData.kapasitasBanquet && (
          <Text style={styles.deskripsi}>
            {`${userData.kapasitasBanquet.min} - ${userData.kapasitasBanquet.max} Tamu`}
          </Text>
        )}
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Deskripsi</Text>
        {userData.deskripsiBanquet && (
          <Text style={styles.deskripsi}>{userData.deskripsiBanquet}</Text>
        )}
        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

export default ProfilTab;

const styles = StyleSheet.create({
  album: {
    height: 270,
    width,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Raleway-ExtraBold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 17,
    fontWeight: 'bold',
  },
  deskripsi: {
    fontFamily: 'Raleway',
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    borderColor: '#8e8e8e',
    elevation: 5,
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
