/* Firebase */
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};

firebase.initializeApp(config);

/**
 * Firebase reference
 */
const fbRef = firebase.database().ref();

export default fbRef;
