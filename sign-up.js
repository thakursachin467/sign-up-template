 var config = {
    apiKey: "Your API-KEY",
    authDomain: "YOUR PROJECT DOMIAN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "STORAGE LINK",
    messagingSenderId: "YOUR SENDER ID"
  };

  //ALL THE ABOVE INFO CAN BE FOUND IN YOUR FIREBASE CONSOLE AT Add Firebase to your web app SECTION JUST COPY AND PASTE THE ETIRE SECTION AS IT IS
  // FIREBASE LINK https://firebase.google.com

  
  firebase.initializeApp(config);
  




document.getElementById('button-1').addEventListener('click', submitform);

//call this on submit
function submitform(e) {
  e.preventDefault();
//get values

var name=formvalues('first_name');
var email=formvalues('email');
var password=formvalues('password');
var password1=formvalues('password1');


if(name.length!=0 && email.length!=0 && password.length!=0) {
//save user only if passwords match
if(password==password1) {

      
      document.querySelector('.alert').style.display='block';
      var password=password;
      var email=email;
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
  document.querySelector('.alert').innerHTML=errorMessage;
  document.querySelector('.alert').style.display='block';
  

    
    // ...
});






//hide alert after some time
setTimeout(function(){
  
  document.querySelector('.alert').style.display='none';
  document.querySelector('.alert').innerHTML='Account Created';
  document.getElementById("registration").reset();


},3000); 





}


//run this if passwords did not match
else {

  document.querySelector('.alert').innerHTML='Password did not match'
  document.querySelector('.alert').style.display='block';
  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);
    



}
} 


//this will run if all fields are empty
 else {
  document.querySelector('.alert').innerHTML='All Fields Are Mandatory'
  document.querySelector('.alert').style.display='block';
  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);


}




}


function formvalues(id) {


return document.getElementById(id).value;



}

