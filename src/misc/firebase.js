import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCfGIbtOaQwfXX5MxjVgTuAbRHRqak9XqE',
  authDomain: 'chat-web-app-101aa.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-101aa-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-101aa',
  storageBucket: 'chat-web-app-101aa.appspot.com',
  messagingSenderId: '411981082759',
  appId: '1:411981082759:web:3e7ca57f1d4931e4af4822',
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
