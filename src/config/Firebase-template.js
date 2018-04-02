// Import dependencies
import { initializeApp, database } from 'firebase';

// Firebase configuration
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>',
};

// Initialise Firebase
initializeApp(config);

// Firebase reference
const fbRef = database().ref();

export default fbRef;
