/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Card = ({navigation}) => {
  const kontakPemesan = () => {
    Alert.alert('Kontak', 'WA: 082312030011\nTelp: 082241328477');
  };

  return (
    <View style={styles.card}>
      <View style={{width: '80%'}}>
        <Text style={styles.textTitle}>--- Nama Pemesan ---</Text>
        <Text style={styles.textDesc}>14 Februari 2021</Text>
        <Text style={styles.textDesc}>15.00 WITA</Text>
        <Text style={styles.textDesc}>Permintaan Menu: </Text>
        <Text>
          Ikan bakar, gado-gado, salad buah, sate ayam, nasi merah. Kue
          pengantin konsepnya bajak laut.
        </Text>
        <Text style={styles.textDesc}>Permintaan Dekorasi:</Text>
        <Text>
          Dibikin konsep pernikahan ala Korea dengan warna dekorasi putih merah
          dan biru.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            source={require('../../../Assets/Icons/alarm.png')}
            style={styles.icon}
          />
          <Text style={styles.textDesc}>Menunggu Konfirmasi</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={kontakPemesan}>
          <Text style={styles.text}>Hubungi Pemesan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#207868'}]}
          onPress={() => navigation.navigate('CatatanManajemen')}>
          <Text style={styles.text}>Terima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomescreenManajemen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default HomescreenManajemen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#2D4F6C',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },
});
