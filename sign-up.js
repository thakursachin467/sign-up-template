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


  // get 2D context
  var ctx = document.querySelector("canvas").getContext("2d"),
  
      // dash-length for off-range
        dashLen = 220,
    
    // we'll update this, initialize
        dashOffset = dashLen,
    
    // some arbitrary speed
        speed = 15,
    
    // the text we will draw
        txt = "Your Page Name",
    
    // start position for x and iterator
    x = 40, i = 0;

     // Comic Sans?? Let's make it useful for something ;) w/ fallbacks
    ctx.font = "80px chalkfont"; 
  
  // to avoid spikes we can join each line with a round joint
  ctx.lineJoin = "round";
  
  // some color, lets use a black pencil
    ctx.strokeStyle = ctx.fillStyle = "#ffffff";



    (function loop() {
      // clear canvas for each frame
      ctx.clearRect(x, 0, 60, 150);
      
      // calculate and set current line-dash for this char
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
      
      // reduce length of off-dash
      dashOffset -= speed;
      
      // draw char to canvas with current dash-length
      ctx.strokeText(txt[i], x, 90);

      // char done? no, the loop
      if (dashOffset > 0) requestAnimationFrame(loop);
      else {
      
        // ok, outline done, lets fill its interior before next
        ctx.fillText(txt[i], x, 90);
        
        // reset line-dash length
        dashOffset = dashLen;
        
        // get x position to next char by measuring what we have drawn
        // notice we offset it a little by random to increase realism
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        
        // lets use an absolute transform to randomize y-position a little
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());
        
        // and just cause we can, rotate it a little too to make it even
        // more realistic
        ctx.rotate(Math.random() * 0.009);
        
        // if we still have chars left, loop animation again for this char
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();  // just to self-invoke the loop

