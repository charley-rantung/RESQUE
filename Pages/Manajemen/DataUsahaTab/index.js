/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const DataUsahaTab = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [namaB, setNamaB] = useState('');
  const [lokasiB, setLokasiB] = useState('');
  const [operasionalB, setOperasionalB] = useState('');
  const [kapasitasB, setKapasitasB] = useState({min: 0, max: 0});
  const [hargaMinB, setHargaMinB] = useState(0);
  const [deskripsiB, setDeskripsiB] = useState('');
  const [noTelpB, setNoTelpB] = useState(0);
  const [gambarB, setGambarB] = useState('');
  // const [paketB, setPaketB] = useState('');
  const [noRekB, setNoRekB] = useState({bni: 0, bri: 0, mandiri: 0, bca: 0});

  const [mnamaB, setmNamaB] = useState(false);
  const [mlokasiB, setmLokasiB] = useState(false);
  const [mnoTelpB, setmNoTelpB] = useState(false);
  const [moperasionalB, setmOperasionalB] = useState(false);
  const [mhargaMinB, setmHargaMinB] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref('akunManajemen/' + globalState.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGambarB(snapshot.val().gambarBanquet);
          setNamaB(snapshot.val().namaBanquet);
          setLokasiB(snapshot.val().lokasiBanquet);
          setNoTelpB(snapshot.val().noTelpBanquet);
          setOperasionalB(snapshot.val().operasionalBanquet);
          setKapasitasB({
            min: snapshot.val().kapasitasBanquet.min,
            max: snapshot.val().kapasitasBanquet.max,
          });
          setHargaMinB(snapshot.val().hargaMinBanquet);
          setDeskripsiB(snapshot.val().deskripsiBanquet);
          setNoRekB({
            bni: snapshot.val().noRekBanquet.bni,
            bri: snapshot.val().noRekBanquet.bri,
            bca: snapshot.val().noRekBanquet.bca,
            mandiri: snapshot.val().noRekBanquet.mandiri,
          });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        setGambarB(response.data);
      }
    });
  };

  const checkImage = () => {
    if (gambarB) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + gambarB}}
          style={{height: 240, width: '100%', resizeMode: 'contain'}}
        />
      );
    }
  };

  const onPressSimpan = () => {
    if (gambarB) {
      if (namaB) {
        if (lokasiB) {
          if (noTelpB && noTelpB.length >= 7) {
            if (operasionalB) {
              if (kapasitasB.min) {
                if (hargaMinB) {
                  if (deskripsiB) {
                    if (
                      noRekB.bni ||
                      noRekB.bri ||
                      noRekB.bca ||
                      noRekB.mandiri
                    ) {
                      firebase
                        .database()
                        .ref('akunManajemen/' + globalState.uid)
                        .update({
                          namaBanquet: namaB,
                          lokasiBanquet: lokasiB,
                          noTelpBanquet: noTelpB,
                          operasionalBanquet: operasionalB,
                          kapasitasBanquet: kapasitasB,
                          hargaMinBanquet: hargaMinB,
                          gambarBanquet: gambarB,
                          noRekBanquet: {
                            bni: noRekB.bni,
                            bri: noRekB.bri,
                            bca: noRekB.bca,
                            mandiri: noRekB.mandiri,
                          },
                          deskripsiBanquet: deskripsiB,
                          dataFilled: true,
                        })
                        .then(() => {
                          Alert.alert('Sukses', 'Data berhasil disimpan');
                          navigation.goBack();
                        })
                        .catch(() => {
                          Alert.alert('Gagal', 'Data tidak berhasil disimpan');
                        });
                    } else {
                      Alert.alert('Peringatan', 'Nomor rekening belum diisi');
                    }
                  } else {
                    Alert.alert('Peringatan', 'Deskripsi belum diisi');
                  }
                } else {
                  Alert.alert('Peringatan', 'Harga paket belum diisi');
                }
              } else {
                Alert.alert('Peringatan', 'Kapasitas tamu belum diisi');
              }
            } else {
              Alert.alert('Peringatan', 'Waktu operasional belum diisi');
            }
          } else {
            Alert.alert('Peringatan', 'No. Telp banquet belum diisi');
          }
        } else {
          Alert.alert('Peringatan', 'Lokasi banquet belum diisi');
        }
      } else {
        Alert.alert('Peringatan', 'Nama banquet belum diisi');
      }
    } else {
      Alert.alert('Peringatan', 'Anda belum memilih gambar');
    }
  };

  return (
    <ScrollView>
      <View
        style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
        {checkImage()}
        {/*Tombol upload picture*/}
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
            Unggah Gambar Banquet
          </Text>
        </TouchableOpacity>

        {/* Nama Banquet */}
        <View style={styles.gap}>
          <Text>Nama Banquet</Text>
          <View style={styles.info}>
            <View>
              <Text>{namaB}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setmNamaB(!mnamaB)}>
              <Text style={{color: 'white'}}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={mnamaB}
            onRequestClose={() => setmNamaB(!mnamaB)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <View
                style={{
                  height: 140,
                  width: '80%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text>Nama Banquet</Text>
                <TextInput
                  style={styles.input}
                  value={namaB}
                  onChangeText={(resp) => setNamaB(resp)}
                  placeholder={'Masukan nama usaha'}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setmNamaB(!mnamaB)}>
                  <Text style={{color: 'white'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Lokasi */}
        <View style={styles.gap}>
          <Text>Lokasi Banquet</Text>
          <View style={styles.info}>
            <View>
              <Text>{lokasiB}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setmLokasiB(!mlokasiB)}>
              <Text style={{color: 'white'}}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={mlokasiB}
            onRequestClose={() => setmLokasiB(!mlokasiB)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <View
                style={{
                  height: 140,
                  width: '80%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text>Lokasi Banquet</Text>
                <TextInput
                  style={styles.input}
                  value={lokasiB}
                  onChangeText={(resp) => setLokasiB(resp)}
                  placeholder={'Masukan lokasi kecamatan'}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setmLokasiB(!mlokasiB)}>
                  <Text style={{color: 'white'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Nomor Telepon */}
        <View style={styles.gap}>
          <Text>No. Telp Banquet</Text>
          <View style={styles.info}>
            <View>
              <Text>{noTelpB}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setmNoTelpB(!mnoTelpB)}>
              <Text style={{color: 'white'}}>Ubah</Text>
            </TouchableOpacity>
          </View>
          {noTelpB.length > 0 && noTelpB.length < 7 ? (
            <View>
              <Text style={{fontSize: 12, color: '#cf1414'}}>
                Nomor tidak valid
              </Text>
            </View>
          ) : null}
          <Modal
            animationType="slide"
            transparent={true}
            visible={mnoTelpB}
            onRequestClose={() => setmNoTelpB(!mnoTelpB)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <View
                style={{
                  height: 140,
                  width: '80%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text>No. Telp Banquet</Text>
                <TextInput
                  style={styles.input}
                  value={noTelpB}
                  onChangeText={(resp) => setNoTelpB(resp)}
                  placeholder={'Masukan kontak'}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setmNoTelpB(!mnoTelpB)}>
                  <Text style={{color: 'white'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Operasional */}
        <View style={styles.gap}>
          <Text>Waktu Layanan Reservasi</Text>
          <View style={styles.info}>
            <View>
              <Text>{operasionalB}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setmOperasionalB(!moperasionalB)}>
              <Text style={{color: 'white'}}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={moperasionalB}
            onRequestClose={() => setmOperasionalB(!moperasionalB)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <View
                style={{
                  height: 140,
                  width: '80%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text>Waktu Layanan Reservasi</Text>
                <TextInput
                  style={styles.input}
                  value={operasionalB}
                  onChangeText={(resp) => setOperasionalB(resp)}
                  placeholder={'Masukan hari. Pisahkan dengan koma'}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setmOperasionalB(!moperasionalB)}>
                  <Text style={{color: 'white'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Kapasitas */}
        <View style={styles.gap}>
          <Text>Kapasitas Tamu</Text>
          <View
            style={{
              flexDirection: 'row',
              width: 320,
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={[styles.input, {width: 155}]}
              value={kapasitasB.min}
              keyboardType={'number-pad'}
              onChangeText={(resp) =>
                setKapasitasB({min: resp, max: kapasitasB.max})
              }
              placeholder={'min.'}
            />
            <TextInput
              style={[styles.input, {width: 155}]}
              value={kapasitasB.max}
              keyboardType={'number-pad'}
              onChangeText={(resp) =>
                setKapasitasB({min: kapasitasB.min, max: resp})
              }
              placeholder={'max.'}
            />
          </View>
        </View>

        {/* Harga minimum */}
        <View style={styles.gap}>
          <Text>Harga Paket Minimum</Text>
          <View style={styles.info}>
            <View>
              <Text>{hargaMinB}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setmHargaMinB(!mhargaMinB)}>
              <Text style={{color: 'white'}}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={mhargaMinB}
            onRequestClose={() => setmHargaMinB(!mhargaMinB)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <View
                style={{
                  height: 140,
                  width: '80%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text>Harga Paket Minimum</Text>
                <TextInput
                  style={styles.input}
                  value={hargaMinB}
                  onChangeText={(resp) => setHargaMinB(resp)}
                  placeholder={'Rp. '}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setmHargaMinB(!mhargaMinB)}>
                  <Text style={{color: 'white'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Deskripsi */}
        <View style={styles.gap}>
          <Text>Deskripsi</Text>
          <TextInput
            style={[styles.input, {height: 120}]}
            value={deskripsiB}
            multiline={true}
            textAlignVertical={'top'}
            onChangeText={(resp) => setDeskripsiB(resp)}
            placeholder={'Alamat lengkap, sosmes, etc'}
          />
        </View>

        {/* Nomor rekening */}
        <View style={styles.gap}>
          <Text>Nomor Rekening:</Text>
          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>BNI</Text>
          <TextInput
            style={styles.input}
            value={noRekB.bni}
            onChangeText={(resp) =>
              setNoRekB({
                bni: resp,
                bri: noRekB.bri,
                bca: noRekB.bca,
                mandiri: noRekB.mandiri,
              })
            }
            placeholder={'00xxxx'}
          />
          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>BRI</Text>
          <TextInput
            style={styles.input}
            value={noRekB.bri}
            onChangeText={(resp) =>
              setNoRekB({
                bni: noRekB.bni,
                bri: resp,
                bca: noRekB.bca,
                mandiri: noRekB.mandiri,
              })
            }
            placeholder={'00xxxx'}
          />
          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>BCA</Text>
          <TextInput
            style={styles.input}
            value={noRekB.bca}
            onChangeText={(resp) =>
              setNoRekB({
                bni: noRekB.bni,
                bri: noRekB.bri,
                bca: resp,
                mandiri: noRekB.mandiri,
              })
            }
            placeholder={'00xxxx'}
          />
          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>Mandiri</Text>
          <TextInput
            style={styles.input}
            value={noRekB.mandiri}
            onChangeText={(resp) =>
              setNoRekB({
                bni: noRekB.bni,
                bri: noRekB.bri,
                bca: noRekB.bca,
                mandiri: resp,
              })
            }
            placeholder={'00xxxx'}
          />
        </View>

        {/* Paket yang disediakan */}
        {/* <View style={styles.gap}>
          <Text>Daftar Paket:</Text>
          <TextInput
            style={[styles.input, {height: 140}]}
            value={paketB}
            multiline={true}
            textAlignVertical={'top'}
            onChangeText={(resp) => setPaketB(resp)}
            placeholder={'Paket yang disediakan'}
          />
        </View> */}

        {/* Tombol Simpan */}
        <TouchableOpacity
          style={[styles.button2, {alignSelf: 'center'}]}
          onPress={onPressSimpan}>
          <Text style={[styles.text, {color: 'white'}]}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DataUsahaTab;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 320,
    borderColor: '#2D4F6C',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  button: {
    height: 32,
    width: 67,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  button2: {
    height: 40,
    width: 320,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  gap: {
    marginTop: 10,
  },
  info: {
    height: 40,
    width: 320,
    flexDirection: 'row',
    borderColor: '#2D4F6C',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  editButton: {
    height: 34,
    width: 60,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
