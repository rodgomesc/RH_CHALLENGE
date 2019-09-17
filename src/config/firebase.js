import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBsyJPHuIi0Ej7NumbOFeQw0eSg3cEyTBg',
  authDomain: 'rh-challenge.firebaseapp.com',
  databaseURL: 'https://rh-challenge.firebaseio.com',
  projectId: 'rh-challenge',
  storageBucket: 'rh-challenge.appspot.com',
  messagingSenderId: '878758723567',
  appId: '1:878758723567:web:bfb06eb2723326143a401a',
};
const app = Firebase.initializeApp(config);
const db = app.database();
export default db;
