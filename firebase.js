
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDIxngHAdOMbrnOXnr0Lv3LTmHnxrajs4o",
  authDomain: "locationapp-22332.firebaseapp.com",
  projectId: "locationapp-22332",
  storageBucket: "locationapp-22332.firebasestorage.app",
  messagingSenderId: "589824281968",
  appId: "1:589824281968:web:6ab8ddbf3e70567f9b93b5",
  measurementId: "G-HFD8BYC30R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };