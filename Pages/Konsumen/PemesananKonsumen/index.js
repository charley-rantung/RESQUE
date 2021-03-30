/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const PemesananKonsumen = ({route, navigation}) => {
  const globalState = useSelector((state) => state);
  const [dataBanquet, setDataBanquet] = useState({});
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());
  const [paket, setPaket] = useState('');
  const [permintaan, setPermintaan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref('akunManajemen/' + route.params.banquetId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataBanquet(snapshot.val());
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressPesan = () => {
    if (tanggal) {
      if (jam) {
        if (paket) {
          firebase
            .database()
            .ref('transaksi/')
            .push({
              idPemesan: globalState.uid,
              idBanquet: route.params.banquetId,
              namaBanquet: dataBanquet.namaBanquet,
              tanggalRes: `${tanggal.getDate()} - ${
                tanggal.getMonth() + 1
              } - ${tanggal.getFullYear()}`,
              jamRes: `${jam.getHours()} : ${jam.getMinutes()}`,
              paketRes: paket,
              permintaanRes: permintaan,
              status: 0,
            })
            .then(() => {
              Alert.alert(
                'Sukses',
                'Reservasi Berhasil',
                [
                  {
                    text: 'Home',
                    onPress: () => navigation.navigate('HomeScreenKonsumen'),
                  },
                  {
                    text: 'Lihat Reservasi',
                    onPress: () => navigation.navigate('List'),
                  },
                ],
                {cancelable: false},
              );
            })
            .catch(() => {
              Alert.alert('Gagal', 'Reservasi tidak berhasil');
            });
        } else {
          Alert.alert('Peringatan', 'Anda belum memilih paket');
        }
      } else {
        Alert.alert('Peringatan', 'Anda belum menentukan jam');
      }
    } else {
      Alert.alert('Peringatan', 'Anda belum menentukan tanggal');
    }
  };

  return (
    <ScrollView>
      <View
        style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
        {/* Tanggal */}
        <View style={[styles.gap, {width: 280}]}>
          <View>
            <Text style={styles.title}>Tanggal</Text>
            <View
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 5,
                },
              ]}>
              <Text style={styles.title2}>{`${tanggal.getDate()} - ${
                tanggal.getMonth() + 1
              } - ${tanggal.getFullYear()}`}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.button}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>
                  Pilih
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            visible={modalVisible}
            style={{backgroundColor: '#ffffff'}}>
            <DatePicker
              date={tanggal}
              onDateChange={(val) => setTanggal(val)}
              androidVariant={'nativeAndroid'}
              mode={'date'}
              minimumDate={new Date()}
              style={{alignSelf: 'center'}}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[styles.button, {alignSelf: 'center'}]}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>
                Tetapkan
              </Text>
            </TouchableOpacity>
          </Modal>
        </View>

        {/* Jam */}
        <View style={[styles.gap, {width: 280}]}>
          <Text style={styles.title}>Jam</Text>
          <View
            style={[
              styles.input,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 5,
              },
            ]}>
            <Text style={styles.title2}>
              {jam.getHours()} : {jam.getMinutes()}
            </Text>
            <TouchableOpacity
              onPress={() => setModalVisible2(!modalVisible2)}
              style={styles.button}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>Pilih</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            visible={modalVisible2}
            style={{backgroundColor: '#ffffff'}}>
            <DatePicker
              date={jam}
              onDateChange={(val) => setJam(val)}
              androidVariant={'nativeAndroid'}
              mode={'time'}
              style={{alignSelf: 'center'}}
            />
            <TouchableOpacity
              onPress={() => setModalVisible2(!modalVisible2)}
              style={[styles.button, {alignSelf: 'center'}]}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>
                Tetapkan
              </Text>
            </TouchableOpacity>
          </Modal>
        </View>

        {/* Pilih Paket */}
        <View style={styles.gap}>
          <Text style={styles.title}>Pilih Paket</Text>
          <TextInput
            style={styles.input}
            value={paket}
            onChangeText={(resp) => setPaket(resp)}
            placeholder={'Pilih paket'}
          />
        </View>

        {/* Daftar Paket */}
        <View style={[styles.gap, {width: 280}]}>
          <Text style={styles.title}>Daftar Paket</Text>
          <View style={[styles.input, {height: 200, padding: 5}]}>
            <ScrollView nestedScrollEnabled={true}>
              <Text>{dataBanquet.paketBanquet}</Text>
            </ScrollView>
          </View>
        </View>

        {/* Permintaan Tambahan */}
        <View style={styles.gap}>
          <Text style={styles.title}>Permintaan Tambahan</Text>
          <TextInput
            style={[styles.input, {height: 120}]}
            value={permintaan}
            multiline={true}
            textAlignVertical={'top'}
            onChangeText={(resp) => setPermintaan(resp)}
            placeholder={'tulis disini...'}
          />
        </View>

        {/* Tombol Pesan */}
        <TouchableOpacity
          style={[styles.button2, {alignSelf: 'center'}]}
          onPress={onPressPesan}>
          <Text style={[styles.text, {color: 'white'}]}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PemesananKonsumen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    borderColor: '#2D4F6C',
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    height: 32,
    width: 67,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 5,
  },
  button2: {
    height: 40,
    width: 280,
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
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D4F6C',
  },
});
