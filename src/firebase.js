import {initializeApp,getApps} from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDFWcfQ3tzLUM8w71s740n7B2Ssxy7Uleo",
    authDomain: "amzn-2-yt-e2cdd.firebaseapp.com",
    projectId: "amzn-2-yt-e2cdd",
    storageBucket: "amzn-2-yt-e2cdd.appspot.com",
    messagingSenderId: "594157974949",
    appId: "1:594157974949:web:3e92dd53f04cd64af4a44c"
  }; 

  let FirebaseApp=getApps.length === 0 ?initializeApp(firebaseConfig):getApps()[0]
  export default FirebaseApp
