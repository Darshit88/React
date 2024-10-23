import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOqiGm-A0RJkMOPzXcRg1tsSkaQvWJL-w",
  authDomain: "reactproject-a3507.firebaseapp.com",
  projectId: "reactproject-a3507",
  storageBucket: "reactproject-a3507.appspot.com",
  messagingSenderId: "726493928904",
  appId: "1:726493928904:web:2de60184c20477a29474fd",
  measurementId: "G-LY7KBFPL1Q",
  db: "https://reactproject-a3507-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
