import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const CardMenungguPembayaran = ({navigation}) => {
  const kontakPemesan = () => {
    Alert.alert('Kontak', 'WA: 082312030011\nTelp: 082241328477');
  };

  return (
    <View style={styles.card}>
      <View style={{width: '80%'}}>
        <Text style={styles.textTitle}>--- Nama Pemesan ---</Text>
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
          <Text style={styles.textDesc}>Menunggu Pembayaran</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={kontakPemesan}>
          <Text style={styles.text}>Hubungi Pemesan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#207868'}]}
          onPress={() => navigation.navigate('CatatanManajemen')}>
          <Text style={styles.text}>Terima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MenungguPembayaran = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <CardMenungguPembayaran navigation={navigation} />
        <CardMenungguPembayaran navigation={navigation} />
        <Text>Halo1</Text>
      </View>
    </ScrollView>
  );
};

const CardRiwayat = ({navigation}) => {
  return (
    <View style={styles.card}>
      <View style={{width: '80%'}}>
        <Text style={styles.textTitle}>--- Nama Pemesan ---</Text>
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
          <Text style={styles.textDesc}>Selesai</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('')}>
          <Text style={styles.text}>Detail Transaksi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Selesai = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <CardRiwayat navigation={navigation} />
        <CardRiwayat navigation={navigation} />
        <Text>Halo</Text>
      </View>
    </ScrollView>
  );
};

const ListscreenSatgas = ({navigation}) => {
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

export default ListscreenSatgas;

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
