/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const TopTab = createMaterialTopTabNavigator();

const AktivitasKonsumen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [dataTransaksi, setDataTransaksi] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const transaksiKey = Object.keys(dataTransaksi);

  const getDataTfromFB = () => {
    firebase
      .database()
      .ref('transaksi/')
      .orderByChild('idPemesan')
      .equalTo(globalState.uid)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          setDataTransaksi(snapshot.val());
          setRefreshing(false);
        }
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
  };

  const onPressBatalkan = (item) => {
    firebase
      .database()
      .ref('transaksi/' + item)
      .remove()
      .then(() => {
        onRefresh();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };

  const checkStatus = (item) => {
    if (dataTransaksi[item].status == 0) {
      return (
        <View style={styles.card} key={item}>
          <View
            style={{width: '80%', borderWidth: 6, borderColor: '#ffd300'}}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.textTitle}>
              {dataTransaksi[item].namaBanquet}
            </Text>
            <Text style={styles.textDesc}>
              {dataTransaksi[item].tanggalRes}
            </Text>
            <Text style={styles.textDesc}>{dataTransaksi[item].jamRes}</Text>
            <Text style={styles.textDesc}>Pilihan Paket:</Text>
            <Text>{dataTransaksi[item].paketRes}</Text>
            <Text style={styles.textDesc}>Permintaan : </Text>
            <Text>{dataTransaksi[item].permintaanRes}</Text>
            {/* Menunggu Konfirmasi */}
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
            {/* Button Batalkan */}
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'white'}]}
              onPress={() => onPressBatalkan(item)}>
              <Text style={{color: '#000'}}>Batalkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (dataTransaksi[item].status == 1) {
      return (
        <View style={styles.card} key={item}>
          <View
            style={{width: '80%', borderWidth: 6, borderColor: '#4ca456'}}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.textTitle}>
              {dataTransaksi[item].namaBanquet}
            </Text>
            <Text style={styles.textDesc}>
              {dataTransaksi[item].tanggalRes}
            </Text>
            <Text style={styles.textDesc}>{dataTransaksi[item].jamRes}</Text>
            <Text style={styles.textDesc}>Pilihan Paket:</Text>
            <Text>{dataTransaksi[item].paketRes}</Text>
            <Text style={styles.textDesc}>Permintaan : </Text>
            <Text>{dataTransaksi[item].permintaanRes}</Text>
            {/* Telah Konfirmasi */}
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
              <Text style={styles.textDesc}>Telah Konfirmasi</Text>
            </View>
            {/* Button Lihat Pesanan */}
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Catatan', {
                  transaksiId: item,
                  banquetId: dataTransaksi[item].idBanquet,
                })
              }>
              <Text style={styles.text}>Lihat Pesanan</Text>
            </TouchableOpacity>
            {/* Button Batalkan */}
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'white'}]}
              onPress={() => onPressBatalkan(item)}>
              <Text style={{color: '#000'}}>Batalkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{alignItems: 'center', marginTop: 20}}>
        {/* Cards */}
        {transaksiKey.map((item) => checkStatus(item))}
      </View>
    </ScrollView>
  );
};

const RiwayatKonsumen = ({navigation}) => {
  const globalState = useSelector((state) => state);
  const [dataTransaksi, setDataTransaksi] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const transaksiKey = Object.keys(dataTransaksi);

  const getDataTfromFB = () => {
    firebase
      .database()
      .ref('transaksi/')
      .orderByChild('idPemesan')
      .equalTo(globalState.uid)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          setDataTransaksi(snapshot.val());
          setRefreshing(false);
        }
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
  };

  const checkStatus = (item) => {
    if (dataTransaksi[item].status == 2) {
      return (
        <View style={styles.card} key={item}>
          <View style={{width: '80%'}}>
            <Text style={styles.textTitle}>
              {dataTransaksi[item].namaBanquet}
            </Text>
            <Text style={styles.textDesc}>
              {dataTransaksi[item].tanggalRes}
            </Text>
            <Text style={styles.textDesc}>{dataTransaksi[item].jamRes}</Text>
            <Text style={styles.textDesc}>Pilihan Paket:</Text>
            <Text>{dataTransaksi[item].paketRes}</Text>
            <Text style={styles.textDesc}>Permintaan : </Text>
            <Text>{dataTransaksi[item].permintaanRes}</Text>
            {/* Selesai */}
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
              <Text style={styles.textDesc}>Selesai</Text>
            </View>
            {/* Button Detail Transaksi */}
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('DetailTransaksiKonsumen', {
                  transaksiId: item,
                  banquetId: dataTransaksi[item].idBanquet,
                })
              }>
              <Text style={styles.text}>Detail Transaksi</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{alignItems: 'center', marginTop: 20}}>
        {/* Cards */}
        {transaksiKey.map((item) => checkStatus(item))}
      </View>
    </ScrollView>
  );
};

const ListscreenKonsumen = ({navigation}) => {
  return (
    <TopTab.Navigator
      initialRouteName="AktivitasKonsumen"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#a7a7a7',
        pressColor: '#fff',
        labelStyle: {fontSize: 12, fontWeight: 'bold'},
        style: {backgroundColor: '#2D4F6C'},
        indicatorStyle: {backgroundColor: '#fff'},
      }}>
      <TopTab.Screen
        name="AktivitasKonsumen"
        component={AktivitasKonsumen}
        options={{title: 'Aktivitas'}}
      />
      <TopTab.Screen
        name="RiwayatKonsumen"
        component={RiwayatKonsumen}
        options={{title: 'Riwayat'}}
      />
    </TopTab.Navigator>
  );
};

export default ListscreenKonsumen;

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
