import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIfqu6I1Aqeq3J6jrtM0po_SCFTrGwx4o",
  authDomain: "alite-tea-store.firebaseapp.com",
  projectId: "alite-tea-store",
  storageBucket: "alite-tea-store.appspot.com",
  messagingSenderId: "699434909884",
  appId: "1:699434909884:web:86ad38e0036c81bccd50b9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth= getAuth(app);
export default app;