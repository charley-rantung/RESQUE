import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PembayaranKonsumen = () => {
  return (
    <View>
      <Text style={styles.teks1}>Pilih Metode{'\n'}Pembayaran</Text>
    </View>
  );
};

export default PembayaranKonsumen;

const styles = StyleSheet.create({
  teks1: {
    fontSize: 24,
  },
});
