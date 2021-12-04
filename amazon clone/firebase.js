
const firebaseConfig = {
  apiKey: "AIzaSyC1rz_hFOnnYsRkrppJnrop9qCoucNYypM",
  authDomain: "rishabh-2e603.firebaseapp.com",
  databaseURL: "https://rishabh-2e603-default-rtdb.firebaseio.com",
  projectId: "rishabh-2e603",
  storageBucket: "rishabh-2e603.appspot.com",
  messagingSenderId: "457311539798",
  appId: "1:457311539798:web:370c222deaae3dbdd621f7",
  measurementId: "G-SE0RH1L97Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db=firebase.firestore();