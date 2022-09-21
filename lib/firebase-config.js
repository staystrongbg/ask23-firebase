// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U',
  authDomain: 'pet-shop-ask23.firebaseapp.com',
  projectId: 'pet-shop-ask23',
  storageBucket: 'pet-shop-ask23.appspot.com',
  messagingSenderId: '667722309020',
  appId: '1:667722309020:web:75661740ae58ef5abe7c59',
  measurementId: 'G-SVSJX3HQ59',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();
// const analytics = getAnalytics(app);
