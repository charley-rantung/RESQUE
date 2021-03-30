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
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import firebase from '../../../Config/firebase';
import {useSelector} from 'react-redux';

const TopTab = createMaterialTopTabNavigator();

const MenungguPembayaran = ({navigation}) => {
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
        }
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
        }
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
    getDataKfromFB();
    setRefreshing(false);
  };

  const cekNama = (uid) => {
    if (dataKonsumen[uid]) {
      return dataKonsumen[uid].nama;
    }
  };

  const cekKontak = (uid) => {
    var kontak = dataKonsumen[uid].noTelp;
    Alert.alert('Kontak', kontak);
  };

  const cekStatus = (item) => {
    if (dataTransaksi[item].status == 1) {
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
              <Text style={styles.textDesc}>Menunggu Pembayaran</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => cekKontak(dataTransaksi[item].idPemesan)}>
              <Text style={styles.text}>Hubungi Pemesan</Text>
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

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{alignItems: 'center', marginTop: 20}}>
        {transaksiKey.map((item) => cekStatus(item))}
      </View>
    </ScrollView>
  );
};

const Selesai = ({navigation}) => {
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
        }
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
        }
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
    getDataKfromFB();
    setRefreshing(false);
  };

  const cekNama = (uid) => {
    if (dataKonsumen[uid]) {
      return dataKonsumen[uid].nama;
    }
  };

  const cekKontak = (uid) => {
    var kontak = dataKonsumen[uid].noTelp;
    Alert.alert('Kontak', kontak);
  };

  const cekStatus = (item) => {
    if (dataTransaksi[item].status == 2) {
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
            {/* Text Status Selesai */}
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
            {/* Button Hubungi Pemesan */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => cekKontak(dataTransaksi[item].idPemesan)}>
              <Text style={styles.text}>Hubungi Pemesan</Text>
            </TouchableOpacity>
            {/* Button Detail Transaksi */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('')}>
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{alignItems: 'center', marginTop: 20}}>
        {transaksiKey.map((item) => cekStatus(item))}
      </View>
    </ScrollView>
  );
};

const ListscreenManajemen = ({navigation}) => {
  return (
    <TopTab.Navigator
      initialRouteName="MenungguPembayaran"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#a7a7a7',
        pressColor: '#fff',
        labelStyle: {fontSize: 12, fontWeight: 'bold'},
        style: {backgroundColor: '#2D4F6C'},
        indicatorStyle: {backgroundColor: '#fff'},
      }}>
      <TopTab.Screen
        name="MenungguPembayaran"
        component={MenungguPembayaran}
        options={{title: 'Menunggu Pembayaran'}}
      />
      <TopTab.Screen name="Selesai" component={Selesai} />
    </TopTab.Navigator>
  );
};

export default ListscreenManajemen;

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
