




  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCHA5p_bgzybP5bSEi9T36L4aDfJnas_NQ",
    authDomain: "form-29e1e.firebaseapp.com",
    projectId: "form-29e1e",
    storageBucket: "form-29e1e.appspot.com",
    messagingSenderId: "67879049404",
    appId: "1:67879049404:web:f973738f6a17915f5098b9",
    measurementId: "G-5P4CL4QDL0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
  }





 
 
  