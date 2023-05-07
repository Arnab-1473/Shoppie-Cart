const home = document.querySelector(".home");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const mycart = document.querySelector(".mycart");
const loginButton = document.querySelector(".login-button");

mycart.addEventListener("click", () => {
    alert("Please login to continue!");
});
    const fullname = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");
    const signupBtn = document.querySelector(".signup-button");
    const checkBox = document.querySelector("#checkbox");

    let users = localStorage.getItem('users') ?  JSON.parse(localStorage.getItem('users')) : [];

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // name validation
        const nameArr = fullname.value.split(" ");
        if(nameArr.length<1) {
            alert('Please enter Name and Surname');
            return false;
        }

        // /email validation
        if(email.value.indexOf('@')<2){
            alert('Please enter a valid email address');
            return false;
        } else if(email.value.lastIndexOf('.') !== email.value.length-4 && email.value.lastIndexOf('.')!== email.value.length-3) {
            alert('Please enter a valid email address');
            return false;
        }
        // let sameEmail = false;
        // let userArr = [];
        // if(localStorage.getItem('users')){
        //     userArr = JSON.parse(localStorage.getItem('users'));
        //     if(userArr.filter(user => user.email == email.value).length != 0){
        //         alert('Email already exists!!! Signup with another email address')
        //         return false;
        //     }
        // }
        
        // passwword validation
        // length validation
        if(password.value.length <6){
            alert('Password should contain atleast 6 characters')
            return false;
        }
        if(password.value.length >16) {
            alert('Password should not exceed more than 16 characters')
            return false;
        }
        // lower case validation
        if(!password.value.match(/[a-z]/)){
            alert('Password should contain one lower case letter');
            return false;
        }
        // upper case validation
        if(!password.value.match(/[A-Z]/)){
            alert('Password should contain one upper case letter');
            return false;
        }
        // number validation
        if(!password.value.match(/[0-9]/)){
            alert('Password should contain one number');
            return false;
        }
        // special char validation
        if(!password.value.match(/[!/@/#/$/%/&/*/>/</./]/)){
            alert('Password should contain one special character');
            return false;
        }

        // confirm password validation
        if(password.value!==confirmPassword.value){
            alert("Password and Confirm Password should be same!!!");
        }
        if(!checkBox.checked){
            alert('Please accept the terms and conditions to continue!!!');
        }
        else{
            const userData = {
                name : fullname.value,
                email : email.value,
                password: password.value,
            };
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = "../Login/login.html";
            alert("Successfully signed up!! Please login to continue.");
        }
        
    })
        
    loginButton.addEventListener("click", () => {
        window.location.href = "../Login/login.html"; 
     })

// 