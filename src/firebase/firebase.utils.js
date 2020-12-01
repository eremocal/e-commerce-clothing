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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
