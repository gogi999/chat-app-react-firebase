import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyBszEIvrxkiKc0snte-1ReG1gT2GUJO0QI',
    authDomain: "chat-2fb6c.firebaseapp.com",
    projectId: "chat-2fb6c",
    storageBucket: "chat-2fb6c.appspot.com",
    messagingSenderId: "986967222445",
    appId: "1:986967222445:web:c93dbd69e51828d5c5fe24"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
