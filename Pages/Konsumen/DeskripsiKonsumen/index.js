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

const {width} = Dimensions.get('window');

const DeskripsiKonsumen = ({route, navigation}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref('akunManajemen/' + route.params.banquetId)
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
      <ScrollView horizontal pagingEnabled style={{width: '100%'}}>
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
        <TouchableOpacity
          style={[styles.button, {alignSelf: 'center'}]}
          onPress={() =>
            navigation.navigate('PemesananKonsumen', {
              banquetId: route.params.banquetId,
            })
          }>
          <Text style={[styles.text, {color: 'white'}]}>Lakukan Reservasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DeskripsiKonsumen;

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
