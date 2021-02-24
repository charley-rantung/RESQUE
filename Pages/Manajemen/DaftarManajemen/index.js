import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from 'react-native-date-picker';

const DaftarManajemen = ({navigation}) => {
  const [nama, setNama] = useState(0);
  const [jk, setJk] = useState('Pria');
  const [tl, setTl] = useState(new Date());
  const [email, setEmail] = useState(0);
  const [nohp, setNohp] = useState(0);
  const [pass, setPass] = useState(0);
  const [data, setData] = useState([{label: 'Pria'}, {label: 'Wanita'}]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
      <View style={styles.gap}>
        <Text>Nama Lengkap Pemilik</Text>
        <TextInput style={styles.input} value={nama} />
      </View>
      <View style={styles.gap}>
        <Text>Jenis Kelamin</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => setJk(e.label)}
          style={{height: 80, width: 280}}
          box={false}
        />
      </View>
      <View style={[styles.gap, {width: 280}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Tanggal Lahir</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{`${tl.getDate()} - ${
              tl.getMonth() + 1
            } - ${tl.getFullYear()}`}</Text>
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
            date={tl}
            onDateChange={(val) => setTl(val)}
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
      <View style={styles.gap}>
        <Text>Email</Text>
        <TextInput style={styles.input} value={email} />
      </View>
      <View style={styles.gap}>
        <Text>No. HP Pemilik</Text>
        <TextInput style={styles.input} value={nohp} />
      </View>
      <View style={styles.gap}>
        <Text>Password</Text>
        <TextInput style={styles.input} value={pass} />
      </View>

      <TouchableOpacity
        style={[styles.button2, {alignSelf: 'center'}]}
        onPress={() => navigation.navigate('DashboardManajemen')}>
        <Text style={[styles.text, {color: 'white'}]}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DaftarManajemen;

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
