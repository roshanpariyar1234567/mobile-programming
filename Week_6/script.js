
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getDatabase} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgrajdy-ckQbEcqs7qh4KLZAQNbGMFF4I",
    authDomain: "fone-pay.firebaseapp.com",
    databaseURL: "https://fone-pay-default-rtdb.firebaseio.com",
    projectId: "fone-pay",
    storageBucket: "fone-pay.firebasestorage.app",
    messagingSenderId: "20986007454",
    appId: "1:20986007454:web:2bc5f2be566bc9dc6c108f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database)