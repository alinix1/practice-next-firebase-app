// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzMXASorJyMyNJXMWCd6dNzRKa0hVTkoU',
  authDomain: 'expense-tracker-9957c.firebaseapp.com',
  projectId: 'expense-tracker-9957c',
  storageBucket: 'expense-tracker-9957c.appspot.com',
  messagingSenderId: '620069637909',
  appId: '1:620069637909:web:1ab04411ce5469a818e31c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
