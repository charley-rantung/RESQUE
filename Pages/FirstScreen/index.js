import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const FirstScreen = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../Assets/Images/ResqueLogo1.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'white', marginTop: 23}]}>
        <Text style={{color: 'black'}}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 230,
    marginTop: 40,
  },
  button: {
    height: 40,
    width: 280,
    backgroundColor: '#2D4F6C',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 63,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },
});
