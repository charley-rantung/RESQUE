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

const CatatanManajemen = ({navigation}) => {
  const [gambar, setGambar] = useState(null);
  const options = {};
  const handlingPhoto = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Peringatan', 'Belum ada gambar yang dipilih');
      } else if (response.error) {
        console.log(response.error);
        Alert.alert('Error', response.error);
      } else {
        Alert.alert('Berhasil', 'Berhasil memilih foto bukti pembayaran');
        setGambar(response.uri);
        console.log('response', response.uri);
        console.log('dari gambar', gambar);
      }
    });
  };

  const Konfirmasi = () => {
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
  };

  const checkImage = () => {
    if (gambar != null) {
      return <Image source={{uri: gambar}} style={{height: 400, width: 400}} />;
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={styles.teks1}>Catatan</Text>
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
        {/* <Image
          source={require('../../../Assets/Images/camera.jpg')}
          style={{height: 400, width: 400}}
        /> */}
        {checkImage()}

        <Text style={styles.teks2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          sagittis, elementum consequat vulputate quis mi. Consequat sed et
          fermentum porttitor ac. At elit lorem quisque integer neque dolor
          neque aliquam interdum. Facilisi facilisis sit mauris eget. Eget
          scelerisque viverra erat iaculis est pretium enim. Orci, elementum
          lorem lacus vehicula. Est metus, dolor purus lacus, netus tortor, id
          risus. Pellentesque quam ac dignissim morbi ac lacus, facilisi lorem
          in.{' '}
        </Text>
        <Text style={styles.teks1}>Kesepakatan Harga</Text>
        <TextInput style={styles.textInput} placeholder="Rp 12.345.678" />

        <TouchableOpacity
          style={[styles.button, {alignSelf: 'center'}]}
          onPress={Konfirmasi}>
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
