const home = document.querySelector(".home");
const profile = document.querySelector(".profile");
const myCart = document.querySelector(".myCart");
const logout = document.querySelector(".logout");

home.addEventListener("click", () => {
    if(localStorage.getItem('currentUser')) {
        window.location.href = "../Landingpage/landingpage.html";
        changePassword.classList.add('hide');
    } else{
        window.location.href = "../index.html";
    }
})

logout.addEventListener("click", () => {
    window.location.href = "../Login/login.html";
    localStorage.removeItem('currentUser');
    changePassword.classList.add('hide');
})

profile.addEventListener("click", () => {
    window.location.href = "./profile.html";
    changePassword.classList.add('hide');
})

myCart.addEventListener("click", () => {
    window.location.href = "../Mycart/myCart.html";
    changePassword.classList.add('hide');
})

const changePassBtn = document.querySelector(".change-password-btn");
const changePassword = document.querySelector(".changePassword");
changePassBtn.addEventListener("click", () => {
    changePassword.classList.remove('hide');
})

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const userName = document.querySelector(".name");
const userEmail = document.querySelector(".email");
const userPassword = document.querySelector(".user-password")
console.log(currentUser);

userName.innerHTML = currentUser.name;
userEmail.innerHTML = currentUser.email;
// userPassword.innerHTML = currentUser.password;

const users = JSON.parse(window.localStorage.getItem('users'));

const oldPass = document.querySelector("#old-password");
const oldPassMsg = document.querySelector("#oldPassMsg");
const newPass = document.querySelector("#new-password");
const newPassMsg = document.querySelector("#newPassMsg");
const confirmNewPass = document.querySelector("#confirm-new-password");
const confirmPassMsg = document.querySelector("#confirmNewPassMsg");
const change = document.querySelector("#change");
const logoutBtn = document.querySelector("#logout");
const notification = document.querySelector(".notification");

change.addEventListener("click", (e) => {
    e.preventDefault();
    if (oldPass.value !== currentUser.password) {
        oldPassMsg.innerHTML = 'Entered password does not match with Current Password!!';
        notification.innerHTML = '';
        return false;
    } else{
        oldPassMsg.innerHTML = '';
    }
    /*----password validation--------- */
    if (newPass.value.length < 8) {
        newPassMsg.innerHTML = 'Password must be atleast 8 characters';
        notification.innerHTML = '';
        return false;
    }
    // uppercase validation
    if(!newPass.value.match(/[A-Z]/)) {
        newPassMsg.innerHTML = 'Password should contain one upper case letter';
        notification.innerHTML = '';
        return false;
    }
    // lower case validation
    if(!newPass.value.match(/[a-z]/)) {
        newPassMsg.innerHTML = 'Password should contain one lower case letter';
        notification.innerHTML = '';
        return false;
    }
    // number validation
    if(!newPass.value.match(/[0-9]/)) {
        newPassMsg.innerHTML = 'Password should contain one number';
        notification.innerHTML = '';
        return false;
    }
    // special character validation
    if(!newPass.value.match(/[!/@/#/$/%/^/&/*/(/)/./]/)) {
        newPassMsg.innerHTML = 'Password should contain one upper case letter';
        notification.innerHTML = '';
        return false;
    }
    // prevent same old password
    if(newPass.value === currentUser.password) {
        newPassMsg.innerHTML = 'New password should be different from the current password';
        notification.innerHTML = '';
        return false;
    }else{
        newPassMsg.innerHTML = '';
    }
    // password and confirm password matching
    if(newPass.value !== confirmNewPass.value) {
        confirmPassMsg.innerHTML = "New password and Confrim password should be same!"
        notification.innerHTML = '';
        return false;
    }
    else{
        confirmPassMsg.innerHTML = "";
        notification.innerHTML = 'Password changed successfully';
        currentUser.password = confirmNewPass.value;
        oldPass.value = "";
        newPass.value = "";
        confirmNewPass.value = "";
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        users.map(data => {
            if(oldPass.value === data.password) {
                data.password = confirmNewPass.value;
            }
        })
        window.localStorage.setItem('users', JSON.stringify(users));
    }    
})
// logout functionality
logoutBtn.addEventListener("click", () => {
    window.localStorage.removeItem('currentUser');
    window.location.href = '../Login/login.html';
})