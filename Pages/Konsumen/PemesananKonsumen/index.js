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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

const PemesananKonsumen = ({route, navigation}) => {
  const globalState = useSelector((state) => state);
  const [dataBanquet, setDataBanquet] = useState({});
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());
  // const [paket, setPaket] = useState('');
  const [permintaan, setPermintaan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedPaket, setSelectedPaket] = useState('');
  const [selectedKet, setSelectedKet] = useState();

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
        if (selectedPaket && selectedPaket !== 'Kosong') {
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
              paketRes: selectedPaket,
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
              <Text style={styles.title2}>{`${tanggal.getDate()}/${
                tanggal.getMonth() + 1
              }/${tanggal.getFullYear()}`}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.button}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>
                  Pilih
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Modal Tanggal */}
          {modalVisible && (
            <DateTimePicker
              testID="dateTimePicker"
              value={tanggal}
              mode={'date'}
              is24Hour={true}
              display="calendar"
              minimumDate={new Date().setDate(new Date().getDate() + 3)}
              onChange={(event, date) => {
                const valTanggal = date || tanggal;
                setTanggal(valTanggal);
                setModalVisible(!modalVisible);
              }}
            />
          )}
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
          {/* Modal Jam */}
          {modalVisible2 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={jam}
              mode={'time'}
              is24Hour={true}
              display="clock"
              onChange={(event, date) => {
                const valJam = date || jam;
                setJam(valJam);
                setModalVisible2(!modalVisible2);
              }}
            />
          )}
        </View>

        {/* Pilih Paket */}
        <View style={styles.gap}>
          <Text style={styles.title}>Pilih Paket</Text>
          <View style={[styles.input, {justifyContent: 'center'}]}>
            <Picker
              selectedValue={selectedPaket}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedPaket(itemValue);
                setSelectedKet(dataBanquet.paketBanquet[itemIndex].keterangan);
              }}>
              {dataBanquet.paketBanquet &&
                dataBanquet.paketBanquet.map((item) => {
                  return <Picker.Item label={item.nama} value={item.nama} />;
                })}
            </Picker>
          </View>
        </View>

        {/* Keterangan */}
        <View style={[styles.gap, {width: 280}]}>
          <Text style={styles.title}>Keterangan</Text>
          <View style={[styles.input, {height: 200, padding: 5}]}>
            <ScrollView nestedScrollEnabled={true}>
              <Text>{selectedKet}</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
