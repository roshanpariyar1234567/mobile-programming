
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getDatabase, ref, get, set, update } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOydScNewnw2qFBo74gLygnZaYPcXrjFY",
    authDomain: "contactus-65a22.firebaseapp.com",
    projectId: "contactus-65a22",
    storageBucket: "contactus-65a22.firebasestorage.app",
    messagingSenderId: "586067698616",
    appId: "1:586067698616:web:e89f3b8e1270b83873e54d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let currentId = null;

// Submit
window.submitData = function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    currentId = Date.now().toString();

    set(ref(db, "contacts/" + currentId), {
        id: currentId,
        name,
        email,
        message
    })
        .then(() => {

            // Show values in details form
            document.getElementById("details-name").value = name;
            document.getElementById("details-email").value = email;
            document.getElementById("details-message").value = message;

            alert("Data Submitted");
        })
        .catch((error) => {
            console.log(error);
        });
};

// Edit
window.editData = function () {

    document.getElementById("name").value =
        document.getElementById("details-name").value;

    document.getElementById("email").value =
        document.getElementById("details-email").value;

    document.getElementById("message").value =
        document.getElementById("details-message").value;
};

// Update
window.updateData = function () {

    if (!currentId) {
        alert("Please submit data first.");
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    update(ref(db, "contacts/" + currentId), {
        name,
        email,
        message
    })
        .then(() => {

            // Update details form
            document.getElementById("details-name").value = name;
            document.getElementById("details-email").value = email;
            document.getElementById("details-message").value = message;

            alert("Data Updated");
        })
        .catch((error) => {
            console.log(error);
        });
};