function accounts(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var cpassword = document.getElementById('cpassword').value;

  if (!isNaN(username)) {
    alert('Enter a username');
  }
  if (!email.includes('@')){
    alert('Enter a valid email address');
  }
  if (!isNaN(password)) {
    alert('Enter a password');
  }
  if (!isNaN(cpassword)) {
    alert('Confirm the password you entered');
  }

  if (username == ""){
    if (email == "") {
      if (password == "") {
        if (cpassword == ""){
          window.location.href == "emulator.html";
        }
      }
    }
  }
}
