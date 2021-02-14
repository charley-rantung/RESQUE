import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
  });

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../Assets/Images/ResqueLogo1.png')}
        style={styles.splash}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    width: 230,
    height: 230,
    marginTop: 140,
  },
});
