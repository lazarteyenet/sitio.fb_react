// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB04HJV5wVLW-ZaX5nSY9P2G8cu5vTNuhA',
    authDomain: 'fb-bdreact-8fd24.firebaseapp.com',
    projectId: 'fb-bdreact-8fd24',
    storageBucket: "fb-bdreact-8fd24.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
