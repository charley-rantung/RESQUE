/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import firebase from '../../../Config/firebase';

const HomescreenKonsumen = ({navigation}) => {
  const [banquetData, setBanquetData] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const banquetKey = Object.keys(banquetData);

  const getDataBfromFB = () => {
    firebase
      .database()
      .ref('akunManajemen/')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setBanquetData(snapshot.val());
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
    getDataBfromFB();
  };

  const cekDataFilled = (item) => {
    if (banquetData[item].dataFilled === true) {
      return (
        <View style={styles.Card} key={item}>
          {/* Foto Banquet */}
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + banquetData[item].gambarBanquet,
            }}
            style={styles.thumbnail}
          />
          {/* Detail Lokasi */}
          <View
            style={{
              height: 20,
              width: 60,
              backgroundColor: '#2D4F6C',
              borderRadius: 4,
              position: 'absolute',
              top: 0,
              left: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>
              {banquetData[item].lokasiBanquet}
            </Text>
          </View>
          {/* Nama Banquet */}
          <Text style={{fontSize: 16}}>{banquetData[item].namaBanquet}</Text>
          {/* Jumlah Tamu */}
          <Text style={{fontSize: 12}}>
            {`${banquetData[item].kapasitasBanquet.min} - ${banquetData[item].kapasitasBanquet.max} Tamu`}
          </Text>
          {/* Harga dan tombol 'Lihat' */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              marginRight: 5,
            }}>
            <View>
              <Text style={{fontSize: 12}}>Mulai dari:</Text>
              <Text style={{fontSize: 12}}>
                {banquetData[item].hargaMinBanquet}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'white'}]}
              onPress={() =>
                navigation.navigate('DeskripsiKonsumen', {banquetId: item})
              }>
              <Text
                style={[
                  styles.text,
                  {fontSize: 12, fontWeight: 'bold', color: '#2D4F6C'},
                ]}>
                Lihat
              </Text>
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {/* Cards */}
        {banquetKey.map((item) => cekDataFilled(item))}
      </View>
    </ScrollView>
  );
};

export default HomescreenKonsumen;

const styles = StyleSheet.create({
  Card: {
    width: 165,
    backgroundColor: '#ffffff',
    marginTop: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  thumbnail: {
    height: 110,
    width: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 5,
  },
  button: {
    height: 32,
    width: 67,
    backgroundColor: '#2D4F6C',
    elevation: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
