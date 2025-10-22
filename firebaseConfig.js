// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa5t8IQZmweMPm2y2gWjWIg1IAkZuGMA4",
  authDomain: "expo-native-test-c382b.firebaseapp.com",
  projectId: "expo-native-test-c382b",
  storageBucket: "expo-native-test-c382b.firebasestorage.app",
  messagingSenderId: "944727477209",
  appId: "1:944727477209:web:b052922e74163a3008e7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
//   export const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
//   });