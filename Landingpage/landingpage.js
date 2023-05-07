// Write your script here
const home = document.querySelector(".home");
const profile = document.querySelector(".profile");
const myCart = document.querySelector(".myCart");
const logout = document.querySelector(".logout");

home.addEventListener("click", () => {
  if (localStorage.getItem('currentUser')) {
    window.location.href = './landingpage.html';
  } else {
    window.location.href = './index.html';
  }
})
myCart.addEventListener("click", () => {
  window.location.href = "../Mycart/myCart.html"
})

logout.addEventListener("click", () => {
  window.location.href = "../Login/login.html";
  localStorage.removeItem('currentUser');
})

const search = document.querySelector('#search');

const menCardWrapper = document.querySelector('.men-card-wrapper');
const womenCardWrapper = document.querySelector('.women-card-wrapper');
const jewelleryCardWrapper = document.querySelector('.jewellery-card-wrapper');
const electronicsCardWrapper = document.querySelector('.electronics-card-wrapper');
const myRating = document.querySelector('#myRange');
let myValue = myRating.value;

let addCart = [];
let addCartArr = [];
const myData = [];
localStorage.getItem('myCart') ? addCartArr = JSON.parse(localStorage.getItem('myCart')) : [];
fetch('https://fakestoreapi.com/products')
    .then(resolve => resolve.json())
    .then(data => {
        data.map(product => {
            myData.push(product.title);
            if (product.category === "men's clothing") {
                menCardWrapper.innerHTML += `
                <div class="card">
                    <img class="image-top" src=${product.image} alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
                        <p class="card-stock">Hurry up only ${product.rating.count} items left!!!</p>
                        <p class="card-rating">${product.rating.rate} &#9733;</p>   
                    </div>
                    <button class='addCart'>Add to cart</button>
                </div>`;
            }
            if (product.category === "women's clothing") {
                womenCardWrapper.innerHTML += `
                <div class="card">
                    <img class="image-top" src=${product.image} alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
                        <p class="card-stock">Hurry up only ${product.rating.count} items left!!!</p>
                        <p class="card-rating">${product.rating.rate} &#9733;</p>   
                    </div>
                    <button class='addCart'>Add to cart</button>
                </div>`;
            }
            if (product.category === "jewelery") {
                jewelleryCardWrapper.innerHTML += `
                <div class="card">
                    <img class="image-top" src=${product.image} alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
                        <p class="card-stock">Hurry up only ${product.rating.count} items left!!!</p>
                        <p class="card-rating">${product.rating.rate} &#9733;</p>   
                    </div>
                    <button class='addCart'>Add to cart</button>
                </div>`;
            }
            if (product.category === "electronics") {
                electronicsCardWrapper.innerHTML += `
                <div class="card">
                    <img class="image-top" src=${product.image} alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
                        <p class="card-stock">Hurry up only ${product.rating.count} items left!!!</p>
                        <p class="card-rating">${product.rating.rate} &#9733;</p>   
                    </div>
                    <button class='addCart'>Add to cart</button>
                </div>`;
            }
        })
        myRating.oninput = function () {
            myValue = this.value;
            let userCard = "";
            document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
            userCard.forEach(function (elem) {
                let cardElem = parseInt(elem.querySelector('.card-rating').innerText);
                elem.classList.add('hide');
                if (cardElem == myValue) {
                    elem.classList.remove('hide');
                }
                if (myValue == 0) {
                    elem.classList.remove('hide');
                }
            })
        }
        const zero = document.querySelector('#checkbox0');
        const twentyfive = document.querySelector('#checkbox25');
        const fifty = document.querySelector('#checkbox50');
        const hundred = document.querySelector('#checkbox100');
        // zero.checked = false;
        zero.addEventListener('click', () => {
            if (zero.checked == false) {
                zero.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                zero.checked = true;
                twentyfive.checked = false;
                fifty.checked = false;
                hundred.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElem >= 0 && cardElem <= 25) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        twentyfive.addEventListener('click', () => {
            if (twentyfive.checked == false) {
                twentyfive.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                zero.checked = false;
                twentyfive.checked = true;
                fifty.checked = false;
                hundred.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElem >= 25 && cardElem <= 50) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        fifty.addEventListener('click', () => {
            if (fifty.checked == false) {
                fifty.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                zero.checked = false;
                twentyfive.checked = false;
                fifty.checked = true;
                hundred.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElem >= 50 && cardElem <= 100) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        hundred.addEventListener('click', () => {
            if (hundred.checked == false) {
                hundred.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                zero.checked = false;
                twentyfive.checked = false;
                fifty.checked = false;
                hundred.checked = true;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElem >= 100) {
                        elem.classList.remove('hide');
                    }
                })
            }
        })

        const search = document.querySelector('.input-search');
        const searchButton = document.querySelector('.btn-search');

        search.addEventListener('input', (e) => {
            
            const inputSearch = search.value.toLowerCase();
            let userCard = "";
            document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
            userCard.forEach(function (elem) {
                elem.classList.add('hide');
                let cardElem = elem.querySelector('.card-title').innerText.toLowerCase();
                if(cardElem.includes(inputSearch)){
                    elem.classList.remove('hide');
                }
            })
            
        })


        addCart = document.querySelectorAll('.addCart');
        let count = 0;
        let idCount = 0;
        addCart.forEach((elem) =>{
            
            elem.setAttribute('id', count++);
            elem.addEventListener("click", function () {
                let x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 1500);
                const myProd = {
                    id: idCount++,
                    img: data[elem.id].image,
                    title: data[elem.id].title,
                    price: data[elem.id].price,
                }
                addCartArr.push(myProd);
                localStorage.setItem('myCart', JSON.stringify(addCartArr))
            });
        });

        const allProd = document.getElementById('all');
        const menProd = document.getElementById('mens');
        const womenProd = document.getElementById('womens');
        const jewelleryProd = document.getElementById('jewellery');
        const electronicsProd = document.getElementById('electronics');
        const menCard = document.querySelector('.mens-clothing');
        const womenCard = document.querySelector('.womens-clothing');
        const jewelleryCard = document.querySelector('.jewellery');
        const electronicsCard = document.querySelector('.electronics');
        const categories = document.querySelectorAll('.selectCategories');
        const clothings = document.querySelectorAll('.clothings');

        allProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.remove('hide');
            })
            allProd.style.color = '#fff';
            allProd.style.backgroundColor = '#000';
        })

        menProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide');
            })
            menCard.classList.remove('hide');
            menProd.style.color = '#fff';
            menProd.style.backgroundColor = '#000';
        })

        womenProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            womenCard.classList.remove('hide');
            womenProd.style.color = '#fff';
            womenProd.style.backgroundColor = '#000';
        })

        jewelleryProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            jewelleryCard.classList.remove('hide');
            jewelleryProd.style.color = '#fff';
            jewelleryProd.style.backgroundColor = '#000';
        })

        electronicsProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            electronicsCard.classList.remove('hide');
            electronicsProd.style.color = '#fff';
            electronicsProd.style.backgroundColor = '#000';
        })
    })

    /*===================================================================================================== */

// const search = document.querySelector(".search");

// const menCard = document.querySelector(".men-card-wrapper")
// const womenCard = document.querySelector(".women-card-wrapper");
// const jewelleryCard = document.querySelector(".jewellery-card-wrapper");
// const electronicsCard = document.querySelector(".electronics-card-wrapper");
// const rating = document.querySelector("#range");
// let myValue = rating.value;

// let addCart = [];
// let addCartArray = [];
// const myData = [];
// localStorage.getItem('myCart') ? addCartArray = JSON.parse(localStorage.getItem('myCart')) : [];

// fetch('https://fakestoreapi.com/products')
//   .then(resolve => resolve.json())
//   .then(data => {
//     // console.log(data);
//     data.map(product => {
//       myData.push(product.title);
//       // mens clothings----------------------------
//       if (product.category === "men's clothing") {
//         menCard.innerHTML += `
//             <div class="card">
//             <img class="image-top" src="${product.image}" alt="${product.title}">
//             <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
//               <p class="card-stock">${product.rating.count}</p>
//               <p class="card-rating">${product.rating.rate} &#9733;
//               </p>
//             </div>
//             <button class="addCart">Add to Cart</button>
//           </div>
//             `;
//       }
//       // womens clothings-----------------
//       if (product.category === "women's clothing") {
//         womenCard.innerHTML += `
//             <div class="card">
//             <img class="image-top" src="${product.image}" alt="${product.title}">
//             <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
//               <p class="card-stock">${product.rating.count}</p>
//               <p class="card-rating">${product.rating.count} &#9733;</p>
//             </div>
//             <button class="addCart">Add to Cart</button>
//           </div>
//             `;
//       }
//       // jewellery---------------------------------
//       if (product.category === "jewelery") {
//         jewelleryCard.innerHTML += `
//             <div class="card">
//             <img class="image-top" src="${product.image}" alt="${product.title}">
//             <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
//               <p class="card-stock">${product.rating.count}</p>
//               <p class="card-rating">${product.rating.rate} &#9733;</p>
//             </div>
//             <button class="addCart">Add to Cart</button>
//           </div>
//             `;
//       }
//       //electronics-----------------------------------
//       if (product.category === "electronics") {
//         electronicsCard.innerHTML += `
//             <div class="card">
//             <img class="image-top" src="${product.image}" alt="${product.title}">
//             <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
//               <p class="card-stock">${product.rating.count}</p>
//               <p class="card-rating">${product.rating.rate} &#9733;</p>
//             </div>
//             <button class="addCart">Add to Cart</button>
//           </div>
//             `;
//       }
//     })

//     // rating filter functionality------------------------

//     // price-range filter functionality------------------------
//     const zero = document.querySelector("#price0");
//     const twentyfive = document.querySelector('#price25');
//     const fifty = document.querySelector('#price50');
//     const hundred = document.querySelector('#price100');

//     zero.addEventListener('click', () => {
//       console.log("hi");
//       if (zero.checked == false) {
//         zero.checked = false;
//         let userCard = "";
//         document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
//         userCard.forEach(function (elem) {
//           let cardElem = parseInt(elem.querySelector('.card-price').innerText);
//           elem.classList.remove('hide');
//         })
//       }
//       else {
//           zero.checked = true;
//           twentyfive.checked = false;
//           fifty.checked = false;
//           hundred.checked = false;
//           let userCard = "";
//           document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
//           userCard.forEach(function (elem) {
//           let cardElem = parseInt(elem.querySelector('.card-price').innerText);
//           elem.classList.add('hide');
//           if (cardElem >= 0 && cardElem <= 25) {
//             elem.classList.remove('hide');
//           }
//         })
//       }

//     })

//     // add cart functionality------------------



//   })    
