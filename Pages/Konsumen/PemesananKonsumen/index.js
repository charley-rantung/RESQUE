/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const PemesananKonsumen = ({navigation}) => {
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());
  const [tamu, setTamu] = useState(0);
  const [menu, setMenu] = useState(0);
  const [dekorasi, setDekorasi] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const Pemberitahuan = () => {
    Alert.alert(
      'Berhasil !',
      'Reservasi Berhasil',
      [
        {
          text: 'Lihat Reservasi',
          onPress: () => navigation.navigate('ListScreenKonsumen'),
        },
        {text: 'Home', onPress: navigation.navigate('HomeScreenKonsumen')},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
      <View style={[styles.gap, {width: 280}]}>
        {/* Tanggal */}
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
              <Text style={{color: '#ffffff', textAlign: 'center'}}>Pilih</Text>
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
      {/* Jumlah Tamu */}
      <View style={styles.gap}>
        <Text style={styles.title}>Jumlah Tamu</Text>
        <TextInput
          style={styles.input}
          value={tamu}
          onChangeText={(jumTamu) => setTamu(jumTamu)}
        />
      </View>
      <View style={styles.gap}>
        <Text style={styles.title}>Permintaan Menu</Text>
        <TextInput style={styles.input} value={menu} />
      </View>
      <View style={styles.gap}>
        <Text style={styles.title}>Permintaan Dekorasi</Text>
        <TextInput style={styles.input} value={dekorasi} />
      </View>

      <TouchableOpacity
        style={[styles.button2, {alignSelf: 'center'}]}
        onPress={Pemberitahuan}>
        <Text style={[styles.text, {color: 'white'}]}>Pesan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PemesananKonsumen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    borderColor: '#2D4F6C',
    borderWidth: 1,
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
