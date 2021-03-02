import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const Card = ({navigation}) => {
  return (
    <View style={styles.card}>
      <View style={{width: '80%'}}>
        <Text style={styles.textTitle}>Banquet Hall 1</Text>
        <Text style={styles.textDesc}>14 Februari 2021</Text>
        <Text style={styles.textDesc}>15.00 WITA</Text>
        <Text style={styles.textDesc}>Permintaan Menu: </Text>
        <Text>
          Ikan bakar, gado-gado, salad buah, sate ayam, nasi merah. Kue
          pengantin konsepnya bajak laut.
        </Text>
        <Text style={styles.textDesc}>Permintaan Dekorasi:</Text>
        <Text>
          Dibikin konsep pernikahan ala Korea dengan warna dekorasi putih merah
          dan biru.
        </Text>

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
          onPress={() => navigation.navigate('Catatan')}>
          <Text style={styles.text}>Lihat Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'white'}]}
          onPress={() => navigation.navigate('')}>
          <Text style={{color: '#000'}}>Batalkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Aktifitas = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const Riwayat = () => {
  return (
    <View>
      <Text> Riwayat</Text>
    </View>
  );
};

const ListscreenKonsumen = ({navigation}) => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Aktifitas" component={Aktifitas} />
      <TopTab.Screen name="Riwayat" component={Riwayat} />
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
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
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
