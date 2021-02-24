import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const KonfirmasiSelesai = ({navigation}) => {
  return (
    <View>
      <Text style={styles.teks}>Reservasi anda{'\n'}Telah dikonfirmasi</Text>
      <Image
        source={require('../../../Assets/Icons/alarm2.png')}
        style={styles.gambar}
      />
      <TouchableOpacity
        style={[styles.button, {alignSelf: 'center'}]}
        onPress={() => navigation.navigate('Catatan')}>
        <Text style={[styles.text, {color: 'white'}]}>Lanjut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KonfirmasiSelesai;

const styles = StyleSheet.create({
  teks: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
  },
  gambar: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    marginTop: 100,
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
