import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCi8mUhUpWHvnjaqOFZtMLP3uhz1NQhXyc',
  authDomain: 'resque-01.firebaseapp.com',
  projectId: 'resque-01',
  storageBucket: 'resque-01.appspot.com',
  messagingSenderId: '759045270031',
  appId: '1:759045270031:web:8cda4cc5a60d823a4e117a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FIREBASE = firebase;

export default FIREBASE;
