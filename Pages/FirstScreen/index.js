/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

const FirstScreen = ({navigation}) => {
  const [modalHelp, setmodalHelp] = useState(false);
  const [modalInfo, setmodalInfo] = useState(false);
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../Assets/Images/ResqueLogo1.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'white', marginTop: 23}]}
        onPress={() => navigation.navigate('Daftar')}>
        <Text style={{color: 'black'}}>Daftar</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => setmodalHelp(!modalHelp)}>
          <Image
            style={{height: 28, width: 28}}
            source={require('../../Assets/Icons/help2_white.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => setmodalInfo(!modalInfo)}>
          <Image
            style={{height: 28, width: 28}}
            source={require('../../Assets/Icons/info2_white.png')}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalHelp}
        onRequestClose={() => setmodalHelp(!modalHelp)}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <View
            style={{
              height: '80%',
              width: '80%',
              backgroundColor: '#fff',
              padding: 10,
              alignItems: 'center',
            }}>
            <ScrollView>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/Images/ResqueLogo1.png')}
                  style={{height: 180, width: 180}}
                />
                <Text style={{fontWeight: 'bold'}}>Apa itu Resque ?</Text>
                <Text style={{textAlign: 'center'}}>
                  Resque adalah aplikasi yang dapat memudahkan masyarakat dalam
                  mencari banquet hall yang sudah berstandar protap.
                </Text>
                <Text style={{textAlign: 'center'}}>
                  Resque dapat membantu anda dalam mengiklankan tempat usaha
                  anda agar perekonomian tetap berjalan.
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                  {'\n'}Apa itu Sertifikat CHSE ?
                </Text>
                <Text style={{textAlign: 'center'}}>
                  Program Sertifikasi CHSE (Clean, Health, Safety & Environment)
                  atau Kebersihan, Kesehatan, Keselamatan, dan Kelestarian
                  Lingkungan adalah proses pemberian sertifikat kepada usaha
                  pariwisata, usaha/fasilitas lain terkait, lingkungan dan
                  destinasi pariwisata.
                </Text>
                <Text style={{fontWeight: 'bold'}}>{'\n'}Standar Protap :</Text>
                <Text>
                  a. Bagi Pelaku Usaha{'\n'}
                  1) Memperhatikan informasi terkini serta himbauan dan
                  instruksi pemerintah pusat dan pemerintah daerah terkait
                  COVID-19 diwilayahnya. Informasi secara berkala dapat diakses
                  pada laman https://infeksiemerging.kemkes.go.id,
                  www.covid19.go.id, dan kebijakan pemerintah daerah setempat.
                  {'\n'}
                  2) Menyediakan sarana cuci tangan pakai sabun atau hand
                  sanitizer di pintu masuk dan tempat lain yang mudah diakses
                  pengunjung.{'\n'}
                  3) Mewajibkan setiap orang yang akan masuk untuk mencuci
                  tangan pakai sabun dengan air mengalir atau menggunakan hand
                  sanitizer.{'\n'}
                  4) Mewajibkan pekerja menggunakan masker selama bekerja.{'\n'}
                  5) Pastikan pekerja memahami COVID-19 dan cara pencegahannya.
                  {'\n'}
                  6) Larangan masuk bagi pekerja dan pengunjung yang memiliki
                  gejala demam, batuk, pilek, nyeri tenggorokan, sesak nafas,
                  dan/atau diare atau memiliki riwayat kontak dengan orang
                  terkena COVID-19.{'\n'}
                  7) Melakukan pemeriksaan suhu tubuh di pintu masuk. Jika
                  ditemukan pekerja atau pengunjung dengan suhu {'>'} 37,3 oC
                  (2kali pemeriksaan dengan jarak 5 menit) tidak diperkenankan
                  masuk.
                  {'\n'}
                  8) Mewajibkan semua penjamah pangan atau pekerja yang kontak
                  langsung dengan pangan agar mengenakan masker, sarung tangan,
                  atau penjepit pada saat menyentuh pangan siap saji dan
                  mengenakan penutup kepala dan celemek pada saat persiapan,
                  pengolahan, dan penyajian pangan. Penggunaan sarung tangan
                  sesuai dengan standar keamanan pangan yang berlaku.{'\n'}
                  9) Menyediakan alat bantu seperti sarung tangan dan/atau
                  penjepit pangan untuk meminimalkan kontak langsung dengan
                  pangan siap saji dalam proses persiapan, pengolahan, dan
                  penyajian.{'\n'}
                  10) Tidak menerapkan sistem prasmanan/buffet. Apabila
                  menerapkan sistem prasmanan/buffet agar menempatkan petugas
                  pelayanan pada stall yang disediakan dengan menggunakan masker
                  serta sarung tangan, pengunjung dalam mengambil makanan
                  dilayani oleh petugas dan tetap menjaga jarak minimal 1 meter.
                  Semua peralatan makan wajib dibersihkan dan di disinfeksi
                  sebelum digunakan kembali.{'\n'}
                  11) Menjaga kualitas udara di tempat usaha atau di tempat
                  kerja dengan mengoptimalkan sirkulasi udara dan sinar matahari
                  masuk serta pembersihan filter AC.{'\n'}
                  12) Mengupayakan pembayaran secara non-tunai (cashless) dengan
                  memperhatikan disinfeksi untuk mesin pembayaran. Jika harus
                  bertransaksi dengan uang tunai, gunakan hand sanitizer
                  setelahnya.{'\n'}
                  13) Memastikan seluruh lingkungan restoran/rumah makan dalam
                  kondisi bersih dan saniter dengan melakukan pembersihan dan
                  disinfeksi secara berkala minimal 2 kali sehari (saat sebelum
                  buka dan tutup) menggunakan pembersih dan disinfektan yang
                  sesuai.{'\n'}
                  14) Meningkatkan frekuensi pembersihan dan disinfeksi (paling
                  sedikit 3 kali sehari) terutama pada permukaan area dan
                  peralatan yang sering disentuh/dilewati orang seperti meja dan
                  kursi di ruang makan, kenop/gagang pintu, sakelar, kran, tuas
                  flush toilet, toilet, meja kasir, mesin penghitung uang/kasir,
                  lantai ruang makan, dan lain lain.{'\n'}
                  15) Menutup alat makan yang diletakkan di meja makan (sendok,
                  garpu, pisau dibungkus misalnya dengan tissue).{'\n'}
                  16) Tidak menggunakan alat makan bersama-sama. Peralatan makan
                  diatas meja makan yang sering disentuh diganti dalam bentuk
                  kemasan sekali pakai/sachet atau diberikan kepada pengunjung
                  apabila diminta.{'\n'}
                  17) Menerapkan jaga jarak dengan berbagai cara seperti:{'\n'}
                  a) Mengatur jarak minimal 1 meter pada saat antri masuk rumah
                  makan/restoran dan sejenisnya, memesan, dan membayar di kasir
                  dengan memberikan tanda di lantai. Bila memungkinkan ada
                  pembatas pengunjung dengan kasir berupa dinding plastik atau
                  kaca.{'\n'}
                  b) Pengaturan jarak antar kursi minimal 1 meter dan tidak
                  saling berhadapan atau pemasangan partisi kaca/mika/plastik
                  antar tamu di atas meja makan.{'\n'}
                  18) Meningkatkan pelayanan pemesanan makanan dan minuman
                  secara online atau delivery service atau drive thru, dan lain
                  sebagainya.{'\n'}
                  {'\n'}
                  b. Bagi Pekerja{'\n'}
                  1) Memastikan diri dalam kondisi sehat sebelum keluar rumah,
                  Jika mengalami gejala seperti demam, batuk, pilek, nyeri
                  tenggorokan, dan/atau sesak nafas tetap di rumah dan
                  periksakan diri ke fasilitas pelayanan kesehatan apabila
                  berlanjut, serta laporkan pada pimpinan tempat kerja.{'\n'}
                  2) Menggunakan masker saat perjalanan dan selama berada di
                  tempat kerja.{'\n'}
                  3) Hindari menyentuh wajah, mata, hidung, dan mulut.{'\n'}
                  4) Memperhatikan jaga jarak minimal 1 meter dengan orang lain.
                  {'\n'}
                  5) Menggunakan pakaian khusus saat bekerja.{'\n'}
                  6) Menghindari penggunaan alat pribadi secara bersama seperti
                  alat sholat, alat makan, dan lain-lain.{'\n'}
                  7) Segera mandi dan berganti pakaian sebelum kontak dengan
                  anggota keluarga di rumah.{'\n'}
                  8) Jika diperlukan, bersihkan handphone, kacamata, tas, dan
                  barang lainnya dengan cairan disinfektan.{'\n'}
                  9) Saat tiba di rumah, segera mandi dan berganti pakaian
                  sebelum kontak dengan anggota keluarga di rumah. Bersihkan
                  handphone, kacamata, tas, dan barang lainnya dengan cairan
                  disinfektan.{'\n'}
                  10) Meningkatkan daya tahan tubuh dengan menerapkan PHBS
                  seperti mengkonsumsi gizi seimbang, aktivitas fisik minimal 30
                  menit sehari dan istirahat yang cukup dengan tidur minimal
                  7jam, serta menghindari faktor risiko penyakit.{'\n'}
                  {'\n'}
                  c. Bagi Pengunjung{'\n'}
                  1) Memastikan diri dalam kondisi sehat sebelum berkunjung ke
                  rumah makan/restoran atau sejenisnya. Jika mengalami gejala
                  seperti demam, batuk, pilek, nyeri tenggorokan, dan/atau sesak
                  nafas tetap di rumah dan periksakan diri ke fasilitas
                  pelayanan kesehatan apabila berlanjut.{'\n'}
                  2) Saat perjalanan dan selama bekerja selalu menggunakan
                  masker, menjaga jarak dengan orang lain, dan hindari menyentuh
                  area wajah. Jika terpaksa akan menyentuh area wajah pastikan
                  tangan bersih dengan cuci tangan pakai sabun dengan air
                  mengalir atau menggunakan hand sanitizer.{'\n'}
                  3) Saat tiba di rumah, segera mandi dan berganti pakaian
                  sebelum kontak dengan anggota keluarga di rumah.{'\n'}
                  4) Bersihkan handphone, kacamata, tas, dan barang lainnya
                  dengan cairan disinfektan.{'\n'}
                  5) Meningkatkan daya tahan tubuh dengan menerapkan PHBS
                  seperti mengkonsumsi gizi seimbang, aktivitas fisik minimal 30
                  menit sehari dan istirahat yang cukup dengan tidur minimal 7
                  jam, serta menghindari faktor risiko penyakit.{'\n'}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalInfo}
        onRequestClose={() => setmodalInfo(!modalInfo)}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <View
            style={{
              height: '80%',
              width: '80%',
              backgroundColor: '#fff',
              padding: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/Images/ResqueLogo1.png')}
              style={{height: 180, width: 180}}
            />
            <Text>Dibuat Oleh:</Text>
            <Text>Charley Rantung</Text>
            <Text>Sebastian Kenny Dasril Ganna{'\n'}</Text>
            <Text>Advisor:</Text>
            <Text>Andria Wahyudi, S.Kom., M.Eng{'\n'} </Text>
            <Text>Co-Advisor:</Text>
            <Text>Stenly Adam, S.Kom., M.Sc </Text>
          </View>
        </View>
      </Modal>
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
  lilButton: {
    height: 32,
    width: 32,
    backgroundColor: '#2d4f6c',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
