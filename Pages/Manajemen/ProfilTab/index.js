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
  Modal,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

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

  const cekVerified = () => {
    if (userData.verified === true) {
      return (
        <TouchableOpacity
          style={{
            height: 60,
            width: 120,
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          onPress={() =>
            Alert.alert(
              'INFO',
              'Banquet ini memiliki sertifikat CHSE dan telah diverifikasi oleh Satuan Tugas Covid-19',
            )
          }>
          <Image
            source={require('../../../Assets/Images/chse-certified.png')}
            style={{
              height: 60,
              width: 120,
            }}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <ScrollView style={{width: '100%'}}>
      {/* Album Scroll */}
      <ScrollView horizontal pagingEnabled style={{width: '100%'}}>
        {userData.gambarBanquet && (
          <Image
            source={{uri: 'data:image/jpeg;base64,' + userData.gambarBanquet}}
            style={styles.album}
          />
        )}
        {cekVerified()}
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
            }}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Lihat</Text>
          </TouchableOpacity>
        </View>
        {/* Modal Sertifikat CHSE */}
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={false}
          style={styles.modal}>
          {/* <View style={styles.modalContainer}> */}
          <Image
            source={{uri: 'data:image/jpeg;base64,' + userData.chseBase64}}
            style={styles.chseContainer}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={[styles.button, {alignSelf: 'center'}]}>
            <Text style={{color: '#ffffff', textAlign: 'center'}}>Tutup</Text>
          </TouchableOpacity>
          {/* </View> */}
        </Modal>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Layanan Reservasi</Text>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#a5a5a5',
    margin: 20,
    padding: 35,
  },
  chseContainer: {
    height: '80%',
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
});
