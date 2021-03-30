/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from '../../../Config/firebase';

const CatatanManajemen = ({route, navigation}) => {
  const [gambar, setGambar] = useState(null);
  const [harga, setHarga] = useState(0);
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const handlingPhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Peringatan', 'Belum ada gambar yang dipilih');
      } else if (response.error) {
        console.log(response.error);
        Alert.alert('Error', response.error);
      } else {
        Alert.alert('Berhasil', 'Berhasil memilih foto bukti pembayaran');
        setGambar(response.data);
      }
    });
  };

  const onClickKonfirmasi = () => {
    if (gambar) {
      if (harga) {
        firebase
          .database()
          .ref('transaksi/' + route.params.transaksiId)
          .update({
            catatanRes: gambar,
            hargaRes: harga,
            status: 1,
          })
          .then(() => {
            Alert.alert('Sukses', 'Pesanan telah dikonfirmasi', [
              {
                text: 'Lihat Riwayat',
                onPress: () => navigation.navigate('List'),
              },
              {
                text: 'OK',
                onPress: () => navigation.navigate('HomeScreenManajemen'),
              },
            ]);
          })
          .catch(() => {
            Alert.alert('Gagal', 'Data tidak berhasil disimpan');
          });
      } else {
        Alert.alert('Peringatan', 'Belum ada kesepakatan harga');
      }
    } else {
      Alert.alert('Peringatan', 'Belum ada catatan');
    }
  };

  const checkImage = () => {
    if (gambar) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + gambar}}
          style={{height: 400, width: 400}}
        />
      );
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={styles.teks1}>Catatan</Text>
        {/* Button Upload Catatan */}
        <TouchableOpacity
          style={{
            width: 130,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={handlingPhoto}>
          <Image
            source={require('../../../Assets/Icons/upload.png')}
            style={{height: 24, width: 24}}
          />
          <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
            Upload Catatan
          </Text>
        </TouchableOpacity>
        {checkImage()}
        <Text style={styles.teks1}>Kesepakatan Harga</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Rp 12.345.678"
          keyboardType={'number-pad'}
          onChangeText={(resp) => setHarga(resp)}
        />

        <TouchableOpacity
          style={[styles.button, {alignSelf: 'center'}]}
          onPress={onClickKonfirmasi}>
          <Text style={{color: 'white'}}>Konfirmasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CatatanManajemen;

const styles = StyleSheet.create({
  teks1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  teks2: {
    fontSize: 14,
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
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#2D4F6C',
    height: 40,
    width: '100%',
  },
});
