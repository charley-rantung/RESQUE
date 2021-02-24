import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
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

  return (
    <View style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
      <View style={[styles.gap, {width: 280}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Tanggal</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{`${tanggal.getDate()} - ${
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
      <View style={[styles.gap, {width: 280}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Jam</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>
              {jam.getHours()} : {jam.getMinutes()}
            </Text>
            <TouchableOpacity
              onPress={() => setModalVisible2(!modalVisible2)}
              style={styles.button}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>Pilih</Text>
            </TouchableOpacity>
          </View>
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

      {console.log(jam)}
      <View style={styles.gap}>
        <Text>Jumlah Tamu</Text>
        <TextInput
          style={styles.input}
          value={tamu}
          onChangeText={(jumTamu) => setTamu(jumTamu)}
        />
      </View>
      <View style={styles.gap}>
        <Text>Permintaan Menu</Text>
        <TextInput style={styles.input} value={menu} />
      </View>
      <View style={styles.gap}>
        <Text>Permintaan Dekorasi</Text>
        <TextInput style={styles.input} value={dekorasi} />
      </View>

      <TouchableOpacity
        style={[styles.button2, {alignSelf: 'center'}]}
        onPress={() => navigation.navigate('MenungguKonfirmasi')}>
        <Text style={[styles.text, {color: 'white'}]}>Pilih</Text>
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
    alignSelf: 'flex-end',
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
});
