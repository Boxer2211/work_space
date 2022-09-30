import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAX5cLvdY6x4DpZwquKgqu_ftK8A5iX0ds",
  authDomain: "dragon-65800.firebaseapp.com",
  projectId: "dragon-65800",
  storageBucket: "dragon-65800.appspot.com",
  messagingSenderId: "981609724836",
  appId: "1:981609724836:web:546750b94fed7d04741f31",
  measurementId: "G-KS7DZG7YKJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const Context = createContext(null)

const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider  value={{
      firebase,
      auth,
      firestore
    }}>
      
      <App />

    </Context.Provider >
  </React.StrictMode>
);


reportWebVitals();
