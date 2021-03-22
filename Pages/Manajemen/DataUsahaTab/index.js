import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
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
  const [paketB, setPaketB] = useState('');

  const onPressSimpan = () => {
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
        paketBanquet: paketB,
        noRekBanquet: {
          bni: 0,
          bri: 0,
          mandiri: 0,
          bca: 0,
        },
        deskripsiBanquet: deskripsiB,
      });
  };

  return (
    <ScrollView>
      <View
        style={{paddingHorizontal: 40, paddingTop: 20, alignItems: 'center'}}>
        <View style={styles.gap}>
          <Text>Nama Banquet</Text>
          <TextInput
            style={styles.input}
            value={namaB}
            onChangeText={(resp) => setNamaB(resp)}
            placeholder={'Masukan nama usaha'}
          />
        </View>
        <View style={styles.gap}>
          <Text>Lokasi Banquet</Text>
          <TextInput
            style={styles.input}
            value={lokasiB}
            onChangeText={(resp) => setLokasiB(resp)}
            placeholder={'Masukan lokasi kecamatan'}
          />
        </View>
        <View style={styles.gap}>
          <Text>No. Telp Banquet</Text>
          <TextInput
            style={styles.input}
            value={noTelpB}
            keyboardType={'number-pad'}
            onChangeText={(resp) => setNoTelpB(resp)}
            placeholder={'Masukan kontak'}
          />
        </View>
        <View style={styles.gap}>
          <Text>Waktu Operasional</Text>
          <TextInput
            style={styles.input}
            value={operasionalB}
            onChangeText={(resp) => setOperasionalB(resp)}
            placeholder={'Masukan hari. Pisahkan dengan koma'}
          />
        </View>
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
        <View style={styles.gap}>
          <Text>Harga paket minimum</Text>
          <TextInput
            style={styles.input}
            value={hargaMinB}
            keyboardType={'number-pad'}
            onChangeText={(resp) => setHargaMinB(resp)}
            placeholder={''}
          />
        </View>
        <View style={styles.gap}>
          <Text>Deskripsi</Text>
          <TextInput
            style={[styles.input, {height: 120}]}
            value={deskripsiB}
            multiline={true}
            numberOfLines={5}
            textAlignVertical={'top'}
            onChangeText={(resp) => setDeskripsiB(resp)}
            placeholder={'Alamat lengkap, sosmes, etc'}
          />
        </View>

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
});
