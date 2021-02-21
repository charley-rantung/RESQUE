import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');

const DeskripsiKonsumen = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%'}}>
      {/* Album Scroll */}
      <ScrollView horizontal pagingEnabled style={{width: '100%'}}>
        <Image
          source={require('../../../Assets/Images/banquet1.jpg')}
          style={styles.album}
        />
        <Image
          source={require('../../../Assets/Images/banquet2.jpg')}
          style={styles.album}
        />
      </ScrollView>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.title}>Banquet Hall 1</Text>
        <Text style={styles.deskripsi}>Paal 2</Text>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Jam Operasional</Text>
        <Text style={styles.deskripsi}>Senin, Selasa, Kamis, Minggu</Text>
        <Text style={styles.deskripsi}>08.00 - 23.00 Wita</Text>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Kapasitas</Text>
        <Text style={styles.deskripsi}>100 - 500 Orang</Text>
        <View style={styles.line} />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 5}}>
        <Text style={styles.subtitle}>Deskripsi</Text>
        <Text style={styles.deskripsi}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          sagittis, elementum consequat vulputate quis mi. Consequat sed et
          fermentum porttitor ac. At elit lorem quisque integer neque dolor
          neque aliquam interdum. Facilisi facilisis sit mauris eget. Eget
          scelerisque viverra erat iaculis est pretium enim. Orci, elementum
          lorem lacus vehicula. Est metus, dolor purus lacus, netus tortor, id
          risus. Pellentesque quam ac dignissim morbi ac lacus, facilisi lorem
          in.{' '}
        </Text>
        <View style={styles.line} />
        <TouchableOpacity
          style={[styles.button, {alignSelf: 'center'}]}
          onPress={() => navigation.navigate('PemesananKonsumen')}>
          <Text style={[styles.text, {color: 'white'}]}>Pilih</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DeskripsiKonsumen;

const styles = StyleSheet.create({
  album: {
    height: 270,
    width,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Raleway-ExtraBold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 17,
    fontWeight: 'bold',
  },
  deskripsi: {
    fontFamily: 'Raleway',
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    borderColor: '#8e8e8e',
    elevation: 5,
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
});
