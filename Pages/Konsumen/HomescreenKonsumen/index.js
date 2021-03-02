import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Card = ({navigation}) => {
  return (
    <View style={styles.Card}>
      {/* Foto Banquet */}
      <Image
        source={require('../../../Assets/Images/banquet1.jpg')}
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
          Paal 2
        </Text>
      </View>
      {/* Nama Banquet */}
      <Text style={{fontSize: 16}}>Banquet Hall 1</Text>
      {/* Jumlah Tamu */}
      <Text style={{fontSize: 12}}>100 - 500 Tamu</Text>
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
          <Text style={{fontSize: 12}}>25.000.000</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'white'}]}
          onPress={() => navigation.navigate('DeskripsiKonsumen')}>
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
};

const HomescreenKonsumen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        <Card navigation={navigation} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};

export default HomescreenKonsumen;

const styles = StyleSheet.create({
  Card: {
    height: 220,
    width: 165,
    backgroundColor: '#ffffff',
    marginTop: 10,
    elevation: 20,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  thumbnail: {
    height: 110,
    width: 165,
    resizeMode: 'contain',
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
