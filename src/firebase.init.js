// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaOqPkSlllpqptBrROQzs5_0pePql4vh8',
  authDomain: 'gymtrainer-c1583.firebaseapp.com',
  projectId: 'gymtrainer-c1583',
  storageBucket: 'gymtrainer-c1583.appspot.com',
  messagingSenderId: '880819872856',
  appId: '1:880819872856:web:6b760e28cd9253cfc6162d'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
