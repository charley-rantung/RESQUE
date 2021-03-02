import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Card = ({namaBank, noRek}) => {
  return (
    <View style={styles.card}>
      <Text style={{fontWeight: 'bold'}}>{namaBank}</Text>
      <Text />
      <Text> No. Rekening:</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{noRek}</Text>
    </View>
  );
};

const PembayaranKonsumen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card namaBank="Bank BRI" noRek=" 896 082312030313" />
      <Card namaBank="Bank BNI" noRek=" 896 082312030313" />
      <Card namaBank="Bank BCA" noRek=" 896 082312030313" />
    </View>
  );
};

export default PembayaranKonsumen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    height: 90,
    width: 280,
    borderWidth: 1,
    borderColor: '#2D4F6C',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
