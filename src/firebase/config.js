import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfp8tlrYfh-2Z6MUWzlglvz2_gZ06VR88",
  authDomain: "adamas-shop-cbffa.firebaseapp.com",
  projectId: "adamas-shop-cbffa",
  storageBucket: "adamas-shop-cbffa.appspot.com",
  messagingSenderId: "700348526057",
  appId: "1:700348526057:web:2b1f66ebc4faa8f8bfef78"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
} 
