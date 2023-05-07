const home = document.querySelector(".home");
const profile = document.querySelector(".profile")
const myCart = document.querySelector(".myCart");
const logout = document.querySelector(".logout");

home.addEventListener("click", () => {
    if(localStorage.getItem('currentUser')) {
        window.location.href = '../Landingpage/landingpage.html';
    }
    else{
        window.location.href = '../index.html';
    }
})

profile.addEventListener("click", () => {
    window.location.href = "../Profile/profile.html";
})

myCart.addEventListener("click", () => {
    window.location.href = "./myCart.html";
})
logout.addEventListener("click", () => {
    window.location.href = "../Login/login.html";
    localStorage.removeItem('currentUser');
})

const cardWrapper = document.querySelector(".left");
const warning = document.querySelector(".warning");
const cartList = document.querySelector(".mainCart");

let cartItems = [];
localStorage.getItem('myCart') ? cartItems = JSON.parse(localStorage.getItem('myCart')) : [];
localStorage.getItem('myCart') ? warning.classList.add('hide') : warning.classList.remove('hide');
let cartID = 0;

let total = 0;
let count = 1;

cartItems.map(product => {
    cartList.classList.remove('hide')
    product.id = cartID++;
    total += product.price;
    localStorage.getItem('myCart') ? 
    cardWrapper.innerHTML += `
    <div class="card">
    <img class="image-top" src=${product.img} alt="${product.title}">
    <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">&#36;${product.price}</p>
    </div>
    <button class='addCart'>Remove From Cart</button>
</div>
    ` : "";
    (localStorage.getItem('myCart')) ? 
    cartList.innerHTML += `
        <div class = "cartList">
            <div class="name-id">
                <div class="id">${count++}</div>
                <div class="name">${product.title}</div>
            </div>
            <div class="price">&#36;${product.price}</div>
        </div>
    ` : "";
})
/*--------------------------------------------- */
let myCount = 0;
let removeItem;
document.querySelectorAll('.addCart') ? removeItem = document.querySelectorAll('.addCart') : [];
removeItem.forEach((ele) => {
    ele.setAttribute('id', myCount++);
    ele.addEventListener('click', () => {
        cartItems.map(data => {
            if (ele.id == data.id) {
                cartItems.splice(ele.id, 1);
            }
            else if (cartItems.length == 1){
                cartItems.pop();
            }
        })
        localStorage.setItem('myCart', JSON.stringify(cartItems));
        window.location.reload();
    })
})

if(myCart.length == undefined) {
    localStorage.removeItem('myCart');
    warning.classList.remove('hide');
}
document.querySelector('.total-price').innerHTML = `&#36;${total}`;

// payment and razorpay functionality
var options = {
    key: "rzp_test_HndvDkSTHCu5Io",
    amount: total * 100,
    currency: "INR",
    name: "Click Away",
    description: "This is your order",
    theme: {
        color: "#000",
    },
    image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
};

document.getElementById("checkout").onclick = function (e) {
    e.preventDefault();
    if(total > 0) {
        localStorage.removeItem('myCart');
        var razorPayGateway = new Razorpay(options);
        razorPayGateway.open();
    } else {
        alert('Add items in cart further process!!')
    }
}