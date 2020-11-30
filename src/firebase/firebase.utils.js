import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD-eSTWsOVSXNwxVeDiqqRvxREr0Z8S-Ec',
  authDomain: 'e-commerce-clothing-80396.firebaseapp.com',
  databaseURL: 'https://e-commerce-clothing-80396.firebaseio.com',
  projectId: 'e-commerce-clothing-80396',
  storageBucket: 'e-commerce-clothing-80396.appspot.com',
  messagingSenderId: '634633980929',
  appId: '1:634633980929:web:8fa816e079958f946b4400',
  measurementId: 'G-H4M3XGPEYN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
