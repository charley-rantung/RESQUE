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
          <Text style={styles.teksNama}>Profile Screen Konsumen</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderBottomWidth: 2,
              marginTop: 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.teksNama}>Profil</Text>
            <Image
              source={require('../../../Assets/Icons/right.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: 2,
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
});
