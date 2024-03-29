/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  RefreshControl,
  Linking,
} from 'react-native';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const HomescreenManajemen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [dataTransaksi, setDataTransaksi] = useState({});
  const [dataKonsumen, setDataKonsumen] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const transaksiKey = Object.keys(dataTransaksi);

  const getDataTfromFB = () => {
    firebase
      .database()
      .ref('transaksi/')
      .orderByChild('idBanquet')
      .equalTo(globalState.uid)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          setDataTransaksi(snapshot.val());
          setRefreshing(false);
        }
      })
      .catch((error) => {
        setRefreshing(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };

  const getDataKfromFB = () => {
    firebase
      .database()
      .ref('akunKonsumen/')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataKonsumen(snapshot.val());
          setRefreshing(false);
        }
      })
      .catch((error) => {
        setRefreshing(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
    getDataKfromFB();
  };

  const cekNama = (uid) => {
    if (dataKonsumen[uid]) {
      return dataKonsumen[uid].nama;
    }
  };

  const cekKontak = (uid) => {
    var kontak = dataKonsumen[uid].noTelp;
    Linking.openURL(`tel:${kontak}`);
  };

  const cekStatus = (item) => {
    if (dataTransaksi[item].status == 0) {
      return (
        <View style={styles.card}>
          <View style={{width: '80%'}} key={item}>
            <Text style={styles.textTitle}>
              {cekNama(dataTransaksi[item].idPemesan)}
            </Text>
            <Text style={styles.textDesc}>
              {dataTransaksi[item].tanggalRes}
            </Text>
            <Text style={styles.textDesc}>{dataTransaksi[item].jamRes}</Text>
            <Text style={styles.textDesc}>Pilihan Paket :</Text>
            <Text>{dataTransaksi[item].paketRes}</Text>
            <Text style={styles.textDesc}>Permintaan Menu :</Text>
            <Text>{dataTransaksi[item].permintaanRes}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../Assets/Icons/alarm.png')}
                style={styles.icon}
              />
              <Text style={styles.textDesc}>Menunggu Konfirmasi</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => cekKontak(dataTransaksi[item].idPemesan)}>
              <Text style={styles.text}>Hubungi Pemesan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#207868'}]}
              onPress={() =>
                navigation.navigate('CatatanManajemen', {transaksiId: item})
              }>
              <Text style={styles.text}>Terima</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    getDataTfromFB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {transaksiKey[0] != null ? (
        <View style={{alignItems: 'center', marginTop: 20}}>
          {transaksiKey.map((item) => cekStatus(item))}
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingTop: 10,
              color: '#2D4F6C',
            }}>
            Belum ada reservasi
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default HomescreenManajemen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#2D4F6C',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
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
  text: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },
});
