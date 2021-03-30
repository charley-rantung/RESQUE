import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from '../../../Config/firebase';

const PembayaranKonsumen = ({route, navigation}) => {
  const [gambar, setGambar] = useState('');
  const [dataBanquet, setDataBanquet] = useState({});
  const options = {};

  const Card = () => {
    if (dataBanquet.noRekBanquet) {
      return (
        <View>
          <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>BNI</Text>
            <Text />
            <Text>No. Rekening:</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {dataBanquet.noRekBanquet.bni}
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>BRI</Text>
            <Text />
            <Text>No. Rekening:</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {dataBanquet.noRekBanquet.bri}
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>BCA</Text>
            <Text />
            <Text>No. Rekening:</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {dataBanquet.noRekBanquet.bca}
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>MANDIRI</Text>
            <Text />
            <Text>No. Rekening:</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {dataBanquet.noRekBanquet.mandiri}
            </Text>
          </View>
        </View>
      );
    }
  };

  const getDataBfromFB = () => {
    firebase
      .database()
      .ref('akunManajemen/' + route.params.banquetId)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          setDataBanquet(snapshot.val());
        }
      });
  };
  const handlingPhoto = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log(response.didCancel);
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

  const onPressKirim = () => {
    if (gambar) {
      firebase
        .database()
        .ref('transaksi/' + route.params.transaksiId)
        .update({
          buktiRes: gambar,
          status: 2,
        })
        .then(() => {
          Alert.alert(
            'Sukses',
            'Pembayaran Berhasil',
            [
              {
                text: 'Lihat Riwayat Reservasi',
                onPress: () => navigation.navigate('RiwayatKonsumen'),
              },
            ],
            {cancelable: false},
          );
        })
        .catch(() => {
          Alert.alert('Gagal', 'Data tidak berhasil disimpan');
        });
    } else {
      Alert.alert('Peringatan', 'Belum ada bukti pembayaran');
    }
  };
  useEffect(() => {
    getDataBfromFB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      {Card()}

      <TouchableOpacity
        style={{
          width: 200,
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
          Upload Bukti Pembayaran
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {alignSelf: 'center'}]}
        onPress={onPressKirim}>
        <Text style={{color: 'white'}}>Kirim</Text>
      </TouchableOpacity>
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
