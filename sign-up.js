 var config = {
    apiKey: "AIzaSyAlPs7A1rzshMzOVouOIZd9vn6Vtjdpw6Y",
    authDomain: "questionnaire-java.firebaseapp.com",
    databaseURL: "https://questionnaire-java.firebaseio.com",
    projectId: "questionnaire-java",
    storageBucket: "questionnaire-java.appspot.com",
    messagingSenderId: "167839386903"
  };


  firebase.initializeApp(config);




document.getElementById('button-1').addEventListener('click', submitform);

//call this on submit
function submitform(e) {
	e.preventDefault();
//get values
console.log('here');
var name=formvalues('first_name');
var email=formvalues('email');
var password=formvalues('password');
var password1=formvalues('password1');




//save user only ifpasswords match
if(password==password1) {



      var password=password;
      var email=email;
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });





//show this alert when user  is created
document.querySelector('.alert').style.display='block';



//hide alert after some time
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
	document.getElementById("registration").reset();

},3000);
}

//run this if passwords did not match
else {

		alert('your password did not match');
		document.getElementById("registration").reset();



}


}


function formvalues(id) {

console.log(document.getElementById(id).value);
return document.getElementById(id).value;



}
