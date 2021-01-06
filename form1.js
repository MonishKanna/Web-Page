




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

 function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
  }
   function signOut(){
    auth.signOut();
    alert("Signed Out");
  }



  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active User " + email);
      //is signed in

    }else{

      alert("No Active User");
      //no user is signed in
    }
  });

 
 
  