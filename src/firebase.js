import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyArZ_cGkBVc5VryF8TZul5DSI9qKYjmAmA",
  authDomain: "abhishek-tiwari-portfolio.firebaseapp.com",
  projectId: "abhishek-tiwari-portfolio",
  storageBucket: "abhishek-tiwari-portfolio.appspot.com",
  messagingSenderId: "148295772121",
  appId: "1:148295772121:web:79ec4ec7bafe832e055bc8"
};


 export const app = initializeApp(firebaseConfig);
export const db=getFirestore()