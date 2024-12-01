import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkBwCTHw56P2qs1n_Yl4HVVNhf0wNx1XM",
    authDomain: "project-daily-planner.firebaseapp.com",
    projectId: "project-daily-planner",
    storageBucket: "project-daily-planner.firebasestorage.app",
    messagingSenderId: "341596285306",
    appId: "1:341596285306:web:90197e8c4b3bcc181ecec3",
    measurementId: "G-LDCB4F40NF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const btn = document.querySelector(".btnlor");
  btn.addEventListener("click",async function(event) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  })
