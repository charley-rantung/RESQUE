/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ProfilescreenKonsumen = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          width: '90%',
          height: '100%',
          alignSelf: 'center',
          marginTop: 28,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../Assets/Icons/emot.png')}
            style={styles.profil}
          />
          <Text style={styles.teksNama}>---Nama Banquet---</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.teksNama}>Profil</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.teksNama}>Sertifikat CHSE</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.teksNama}>Data Usaha</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.teksNama}>Keluar</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilescreenKonsumen;

const styles = StyleSheet.create({
  profil: {
    height: 60,
    width: 60,
    marginRight: 35,
  },
  teksNama: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    borderBottomWidth: 2,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
