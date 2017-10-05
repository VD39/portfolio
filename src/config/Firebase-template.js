// Firebase
import { initializeApp, database } from 'firebase';

// Initialize Firebase
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};

initializeApp(config);

// Firebase reference
const fbRef = database().ref();

export default fbRef;
