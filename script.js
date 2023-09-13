// // Get form elements
// let signupForm = document.getElementsByClassName("sign-up-form");
// let loginForm = document.getElementsByClassName("login-form");

// // Event listener for sign-up form
// signupForm.addEventListener("submit", function () {
//     e.preventDefault();
//     let username = document.getElementById("fullname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("typepassword").value;
//     // You can send this data to your server for user registration.
//     console.log("Sign up:", username, email, password);
//     // Reset the form
//     signupForm.reset();
// });

// // Event listener for login form
// loginForm.addEventListener("submit", function () {
//     e.preventDefault();
//     let username = document.getElementById("email").value;
//     let password = document.getElementById("ltypepassword").value;
//     // You can send this data to your server for user authentication.
//     console.log("Login:", username, password);
//     // Reset the form
//     loginForm.reset();
// });



// For sign up and login password
let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("typepassword")
let secondPassword = document.getElementById("password")

eyeicon.onclick = function(){
    if (password.type == "password"){
        password.type = "text";
        eyeicon.src = "C:/Users/DICA/Desktop/Precious/Invinsible/Kode/Sign up page/img/eye.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "C:/Users/DICA/Desktop/Precious/Invinsible/Kode/Sign up page/img/invisible.png";
    }
}



// For terms & conditions
let  hambuger = document.querySelector(".hambuger");
let navMenu = document.querySelector(".nav-menu");


hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n => n.
addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// $(document).ready(function(){
//     $('.hambuger').click(function(){
//         $('.nav-menu').toggleClass('show');
//     });
// });