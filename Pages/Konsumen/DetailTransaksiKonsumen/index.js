import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';
import firebase from '../../../Config/firebase';
import NumberFormat from 'react-number-format';

const DetailTransaksiKonsumen = ({route}) => {
  const [dataTransaksi, setDataTransaksi] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const getDataTfromFB = () => {
    firebase
      .database()
      .ref('transaksi/' + route.params.transaksiId)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          setDataTransaksi(snapshot.val());
        }
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataTfromFB();
    setRefreshing(false);
  };

  useEffect(() => {
    getDataTfromFB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text style={styles.teks1}>Kesepakatan Harga</Text>
      <NumberFormat
        value={dataTransaksi.hargaRes}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rp '}
        renderText={(value, props) => <Text style={styles.teks2}>{value}</Text>}
      />
      <Text style={styles.teks1}>Catatan</Text>
      <Image
        source={{uri: 'data:image/jpeg;base64,' + dataTransaksi.catatanRes}}
        style={styles.image}
      />
      <Text style={styles.teks1}>Bukti Pembayaran</Text>
      <Image
        source={{uri: 'data:image/jpeg;base64,' + dataTransaksi.buktiRes}}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default DetailTransaksiKonsumen;

const styles = StyleSheet.create({
  teks1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  teks2: {
    fontSize: 14,
    marginLeft: 10,
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: 550,
    width: '95%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
