/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const DaftarPaketManajemen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [paketB, setPaketB] = useState([
    {
      nama: '',
      keterangan: '',
    },
  ]);

  const [namaP, setnamaP] = useState('');
  const [keteranganP, setketeranganP] = useState('');
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalUbah, setmodalUbah] = useState(false);
  const [modalContent, setmodalContent] = useState({
    nama: '',
    keterangan: '',
    index: -1,
  });

  const onPressTambah = () => {
    // paketB.push({nama: namaP, keterangan: keteranganP});
    setPaketB([...paketB, {nama: namaP, keterangan: keteranganP}]);
    setnamaP('');
    setketeranganP('');
    setmodalAdd(!modalAdd);
  };

  const onPressUbah2 = () => {
    let newArr = paketB;
    newArr[modalContent.index].nama = modalContent.nama;
    newArr[modalContent.index].keterangan = modalContent.keterangan;
    setPaketB(newArr);
    setmodalContent({nama: '', keterangan: '', index: -1});
    setmodalUbah(!modalUbah);
  };

  const onPressHapus = (item, index) => {
    let deletedNama = item.nama;
    let newArr = paketB;
    let hasilAkhir = newArr.filter((el) => el.nama !== deletedNama);
    setPaketB(hasilAkhir);
  };

  const getData = () => {
    firebase
      .database()
      .ref('akunManajemen/' + globalState.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPaketB(snapshot.val().paketBanquet);
        }
      });
  };

  const updateData = () => {
    if (paketB.length) {
      console.log(paketB);
      console.log(paketB.length);
      firebase
        .database()
        .ref('akunManajemen/' + globalState.uid)
        .update({
          paketBanquet: paketB,
        })
        .then(() => {
          Alert.alert('Sukses', 'Data berhasil disimpan');
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Gagal', 'Data tidak berhasil disimpan');
        });
    } else {
      Alert.alert('Gagal', 'Masukan daftar paket');
      console.log(paketB);
      console.log('length', paketB.length);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fungsiRender = (item, index) => (
    <View style={styles.card}>
      <View style={{width: '80%'}} key={item}>
        <Text style={styles.textTitle}>{item.nama}</Text>
        <Text style={styles.textDesc}>Keterangan:</Text>
        <Text>{item.keterangan}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setmodalContent({
              nama: item.nama,
              keterangan: item.keterangan,
              index: index,
            });
            setmodalUbah(!modalUbah);
          }}>
          <Text style={styles.text}>Ubah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#207868'}]}
          onPress={() => onPressHapus(item, index)}>
          <Text style={styles.text}>Hapus</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalUbah}
        onRequestClose={() => {
          setmodalUbah(!modalUbah);
          setnamaP('');
          setketeranganP('');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              height: 300,
              width: '80%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: 20,
              elevation: 5,
            }}>
            <Text style={styles.textTitle}>Nama Paket</Text>
            <TextInput
              style={styles.input}
              value={modalContent.nama}
              onChangeText={(resp) =>
                setmodalContent({...modalContent, nama: resp})
              }
              placeholder={'Masukan nama usaha'}
            />
            <Text style={styles.textTitle}>Keterangan</Text>
            <TextInput
              style={[styles.input, {height: 140}]}
              value={modalContent.keterangan}
              multiline={true}
              textAlignVertical={'top'}
              onChangeText={(resp) =>
                setmodalContent({...modalContent, keterangan: resp})
              }
              placeholder={'Paket yang disediakan'}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPressUbah2()}>
              <Text style={styles.text}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={paketB}
          renderItem={({item, index}) => fungsiRender(item, index)}
          keyExtractor={(item) => `${item.nama}${item.keterangan}`}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2D4F6C',
            borderRadius: width / 2,
            marginVertical: 30,
          }}
          onPress={() => {
            setmodalAdd(!modalAdd);
          }}>
          <Text style={{color: 'white', fontSize: 24}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, {alignSelf: 'center'}]}
          onPress={updateData}>
          <Text style={[styles.text, {color: 'white'}]}>Simpan</Text>
        </TouchableOpacity>

        {/* Modal Tambah */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalAdd}
          onRequestClose={() => {
            setmodalAdd(!modalAdd);
            setnamaP('');
            setketeranganP('');
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                height: 300,
                width: '80%',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius: 20,
                elevation: 5,
              }}>
              <Text style={styles.textTitle}>Nama Paket</Text>
              <TextInput
                style={styles.input}
                value={namaP}
                onChangeText={(resp) => setnamaP(resp)}
                placeholder={'Masukan nama usaha'}
              />
              <Text style={styles.textTitle}>Keterangan</Text>
              <TextInput
                style={[styles.input, {height: 140}]}
                value={keteranganP}
                multiline={true}
                textAlignVertical={'top'}
                onChangeText={(resp) => setketeranganP(resp)}
                placeholder={'Paket yang disediakan'}
              />
              <TouchableOpacity style={styles.button} onPress={onPressTambah}>
                <Text style={styles.text}>Tambah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default DaftarPaketManajemen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: 340,
    borderWidth: 1,
    borderColor: '#2D4F6C',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  input: {
    height: 40,
    width: 280,
    borderColor: '#2D4F6C',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
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
});
