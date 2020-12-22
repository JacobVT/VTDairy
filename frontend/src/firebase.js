import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const configOptions = {
  apiKey: 'AIzaSyAuxybsjiKo0zG9bTiH_NiaRwkDWaCHn2A',
  authDomain: 'vt-dairy.firebaseapp.com',
  projectId: 'vt-dairy',
  storageBucket: 'vt-dairy.appspot.com',
  messagingSenderId: '378857198049',
  appId: '1:378857198049:web:cb35a58d29af5af12d02a0',
  measurementId: 'G-SWYE9262LG',
};
firebase.initializeApp(configOptions);

//utils
const firestore = firebase.firestore();
const auth = firebase.auth();

//collection references
const sectionsCollection = firestore.collection('sections');
const usersCollection = firestore.collection('users');

//export all
export {
  firestore,
  auth,
  sectionsCollection,
  usersCollection,
};
// eslint-disable-next-line import/prefer-default-export
