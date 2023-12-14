function accounts(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var cpassword = document.getElementById('cpassword').value;

  if (!isNaN(username) || !email.includes('@')) {
    alert('Enter a username or email address');
  }
  if (!isNaN(password)) {
    alert('Enter a password');
  }

  if ( username=="" || password==""){
    window.location.href == "emulator.html";
  }
}
