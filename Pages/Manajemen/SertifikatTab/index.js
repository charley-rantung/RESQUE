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
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const SertifikatTab = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [gambar, setGambar] = useState({});
  const options = {
    // noData: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
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
        // Alert.alert('Berhasil', 'Berhasil memilih foto bukti pembayaran');
        setGambar(response);
        // console.log('respon gambar', response);
      }
    });
  };

  const onClickKirim = () => {
    if (gambar.data) {
      firebase
        .database()
        .ref('akunManajemen/' + globalState.uid)
        .update({
          chseBase64: gambar.data,
        })
        .then(() => {
          Alert.alert('Sukses', 'Berhasil mengunggah sertifikat');
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Gagal', 'Data tidak berhasil disimpan');
        });
    } else {
      Alert.alert('Peringatan', 'Anda belum memilih gambar');
    }
  };

  const checkImage = () => {
    if (gambar) {
      return (
        <Image
          // source={{uri: gambar.uri}}
          source={{uri: 'data:image/jpeg;base64,' + gambar.data}}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      {checkImage()}
      {/*Button upload picture*/}
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
          style={{height: 40, width: 40}}
        />
        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
          Unggah Sertifikat CHSE
        </Text>
      </TouchableOpacity>
      {/*Button Kirim  */}
      <TouchableOpacity
        style={[styles.button, {alignSelf: 'center'}]}
        onPress={onClickKirim}>
        <Text style={{color: 'white'}}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SertifikatTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
