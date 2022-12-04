var storedItem = localStorage.getItem('storedItem');    
let got_account = false;
function here(){
    localStorage.setItem("name",document.getElementById("signup-name").value);
    localStorage.setItem("email",document.getElementById("signup-email").value);
    localStorage.setItem("password",document.getElementById("signup-password").value);
    alert("Sign up successful, go to login page");
}
function try_login(){
    let checkemail = document.getElementById("login-name").value === localStorage.getItem('email');
    let checkpassword = document.getElementById("login-password").value === localStorage.getItem('password');
    if (checkemail && checkpassword === true){
        alert("Login successful");
        window.location.replace("html.html");
        localStorage.setItem("login-email",document.getElementById("login-name").value);
        localStorage.setItem("login-password",document.getElementById("login-password").value);
        got_account = true;
    }
    else{
        alert("Invalid email or/and password. Please try again");

    }
    return false;    
}
function showappt(){
    if (got_account == true){
        alert("Your appointment is on : "+localStorage.getItem("bookingdate"));
    }
    else{
        alert("Please login to show booking");
    }
}
