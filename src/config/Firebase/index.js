import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBBZs4XIvwhJFbEqWfBO_TtZgvnZ2-sL6s',
  authDomain: 'doctor-2-e9bf0.firebaseapp.com',
  projectId: 'doctor-2-e9bf0',
  storageBucket: 'doctor-2-e9bf0.appspot.com',
  messagingSenderId: '14131460171',
  appId: '1:14131460171:web:6a3d7c59887f3125ae75ce',
};

firebase.initializeApp(firebaseConfig);

const Firebase = firebase;

export default Firebase;
