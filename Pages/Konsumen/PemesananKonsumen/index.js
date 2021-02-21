import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';

const PemesananKonsumen = ({navigation}) => {
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());
  const [tamu, setTamu] = useState(0);
  const [menu, setMenu] = useState('');
  const [dekorasi, setDekorasi] = useState('');
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Tanggal</Text>
      <DatePicker
        date={tanggal}
        onDateChange={setTanggal}
        androidVariant={'nativeAndroid'}
        mode={'date'}
      />
      <Text>Jam</Text>
      <DatePicker
        date={jam}
        onDateChange={setJam}
        androidVariant={'nativeAndroid'}
        mode={'time'}
      />
      <Text>Jumlah Tamu</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={tamu}
      />
      <Text>Permintaan Menu</Text>
      <Text>Permintaan Dekorasi</Text>
    </View>
  );
};

export default PemesananKonsumen;

const styles = StyleSheet.create({});
