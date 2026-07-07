import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA6d680f9xAf0y3OsgmRhJA5sJVkLW0Ws",
  authDomain: "recipely-app-6aa45.firebaseapp.com",
  projectId: "recipely-app-6aa45",
  storageBucket: "recipely-app-6aa45.firebasestorage.app",
  messagingSenderId: "849764247852",
  appId: "1:849764247852:web:0aa73994884923cbc12489",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);