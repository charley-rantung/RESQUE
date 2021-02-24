import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Catatan = ({navigation}) => {
  return (
    <View>
      <Text style={styles.teks1}>Catatan</Text>
      <Text style={styles.teks2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
        sagittis, elementum consequat vulputate quis mi. Consequat sed et
        fermentum porttitor ac. At elit lorem quisque integer neque dolor neque
        aliquam interdum. Facilisi facilisis sit mauris eget. Eget scelerisque
        viverra erat iaculis est pretium enim. Orci, elementum lorem lacus
        vehicula. Est metus, dolor purus lacus, netus tortor, id risus.
        Pellentesque quam ac dignissim morbi ac lacus, facilisi lorem in.{' '}
      </Text>
      <Text style={styles.teks1}>Kesepakatan Harga</Text>
      <Text style={styles.teks2}>Rp 15.325.000</Text>

      <TouchableOpacity
        style={[styles.button, {alignSelf: 'center'}]}
        onPress={() => navigation.navigate('PembayaranKonsumen')}>
        <Text style={[styles.text, {color: 'white'}]}>Lanjut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Catatan;

const styles = StyleSheet.create({
  teks1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  teks2: {
    fontSize: 14,
    marginLeft: 10,
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
