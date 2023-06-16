import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBA1u7Duby1SaWXM7qQzVzPKhvGH9bthas",
    authDomain: "prueba-ciom-stora.firebaseapp.com",
    projectId: "prueba-ciom-stora",
    storageBucket: "prueba-ciom-stora.appspot.com",
    messagingSenderId: "67341488060",
    appId: "1:67341488060:web:d02ab26a952e5186d525b9"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);