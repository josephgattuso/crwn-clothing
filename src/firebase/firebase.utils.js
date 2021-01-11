import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDZTpy_tgP8t32wTIyg2pzu2LxWtP9WWss',
  authDomain: 'crwnclothing-app.firebaseapp.com',
  projectId: 'crwnclothing-app',
  storageBucket: 'crwnclothing-app.appspot.com',
  messagingSenderId: '591244287827',
  appId: '1:591244287827:web:a276c6224ff9db6e1b0ba6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
