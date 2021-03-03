import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
  const [Gambar, setGambar] = useState('');
  const options = {};
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
        setGambar(response.uri);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card namaBank="Bank BRI" noRek=" 896 082312030313" />
      <Card namaBank="Bank BNI" noRek=" 896 082312030313" />
      <Card namaBank="Bank BCA" noRek=" 896 082312030313" />

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
        onPress={() =>
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
          )
        }>
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
