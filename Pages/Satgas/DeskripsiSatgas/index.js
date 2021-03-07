/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
const {width} = Dimensions.get('window');

const DeskripsiSatgas = ({navigation}) => {
  const btnVerifikasi = () => {
    Alert.alert('Sukses', 'Banquet Hall berhasil di Verifikasi', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('HomeScreenSatgas'),
      },
    ]);
  };

  return (
    <ScrollView style={{width: '100%'}}>
      {/* Album Scroll */}
      <ScrollView horizontal pagingEnabled style={{width: '100%'}}>
        <Image
          source={require('../../../Assets/Images/banquet1.jpg')}
          style={styles.album}
        />
        <Image
          source={require('../../../Assets/Images/banquet2.jpg')}
          style={styles.album}
        />
      </ScrollView>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.title}>Banquet Hall 1</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../Assets/Icons/location.png')}
            style={{height: 20, width: 20, marginRight: 5}}
          />
          <Text style={styles.deskripsi}>Paal 2</Text>
        </View>
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
        <Text style={styles.subtitle}>Jam Operasional</Text>
        <Text style={styles.deskripsi}>Senin, Selasa, Kamis, Minggu</Text>
        <Text style={styles.deskripsi}>08.00 - 23.00 Wita</Text>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Kapasitas</Text>
        <Text style={styles.deskripsi}>100 - 500 Orang</Text>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Deskripsi</Text>
        <Text style={styles.deskripsi}>
          Alamat lengkap: Jalan A.A. Maramis, Kayu Watu, Mapanget, Kairagi Dua,
          Kec. Mapanget, Kota Manado, Sulawesi Utara No. Telp: +62431811111
        </Text>
        <View style={styles.line} />
        <TouchableOpacity
          style={[styles.button, {alignSelf: 'center'}]}
          onPress={btnVerifikasi}>
          <Text style={[styles.text, {color: 'white'}]}>Verifikasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DeskripsiSatgas;

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
