import firebase from 'firebase/app';
import 'firebase/firestore';

const configOptions = {
  apiKey: 'AIzaSyAuxybsjiKo0zG9bTiH_NiaRwkDWaCHn2A',
  authDomain: 'vt-dairy.firebaseapp.com',
  projectId: 'vt-dairy',
  storageBucket: 'vt-dairy.appspot.com',
  messagingSenderId: '378857198049',
  appId: '1:378857198049:web:cb35a58d29af5af12d02a0',
  measurementId: 'G-SWYE9262LG',

};

// eslint-disable-next-line import/prefer-default-export
export const db = firebase
  .initializeApp(configOptions)
  .firestore();