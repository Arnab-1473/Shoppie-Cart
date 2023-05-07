const home = document.querySelector(".home");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const myCart = document.querySelector(".myCart");

const signupBtn = document.querySelector(".signup-link");
signupBtn.addEventListener("click", () => {
    window.location.href = "../Signup/signup.html";
});

home.addEventListener("click", () => {
    if(localStorage.getItem('currentUser')) {
        window.location.href = "../Landingpage/landingpage.html";
    }
    else{
        window.location.href = "../index.html";
    }
})

login.addEventListener("click", () => {
    window.location.href = "./login.html";
})

signup.addEventListener("click", () => {
    window.location.href = "../Signup/signup.html";
})

myCart.addEventListener("click", () => {
    alert("Please login first!!")
})

const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");
const loginBtn = document.querySelector(".login-btn");
const users = JSON.parse(localStorage.getItem('users'));
const currentUser = {};

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let countEmail = 0;
    users.map(data => {
        if (data.email === email.value && data.password === password.value) {
            countEmail++;
            currentUser.email = data.email;
            currentUser.name = data.name;
            currentUser.password = data.password;
        }
        // if (countEmail == 0) {
        //     alert("Invalid email or password!!!");
        //     return false;
        // }
        // else {
            currentUser.token = generateToken();
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = '../Landingpage/landingpage.html';
        // }
    });
})

if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../Landingpage/landingpage.html';
}

function generateToken() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charLength = characters.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += characters.charAt(parseInt(digit, 10) % charLength);
    });
    return token;
}