import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MenungguKonfirmasi = () => {
  return (
    <View>
      <Text style={styles.teks}>
        Menunggu Konfirmasi{'\n'}Banqueting Hall 1
      </Text>
      <Image
        source={require('../../../Assets/Icons/alarm.png')}
        style={styles.gambar}
      />
    </View>
  );
};

export default MenungguKonfirmasi;

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
});
