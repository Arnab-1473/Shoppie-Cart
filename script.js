const card = document.querySelector(".card-wrapper");

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        console.log("Data", data);
        const idx = Math.abs(Math.floor(Math.random() * data.length - 1));
        card.innerHTML = `
        <div class="card">
            <img class="cart-image" src="${data[idx].image}" alt="" >
            <div class="card-body">
              <h5 class="card-title">${data[idx].title}</h5>
              <p class="card-text">&#36;${data[idx].price}</p>
              <p class="card-stock">Hurry up!! Only <b>${data[idx].rating.count}</b> has left</p>
              <p class="card-rating"> Rating : <b>${data[idx].rating.rate} &#9733</b> </p>
            </div>
            <button class="add-cart">Add to Cart</button>
         </div>`;
        const addCart = document.querySelector(".add-cart");
        addCart.addEventListener("click", () => {
            alert("Please login to continue");
        })
    });

    const login = document.querySelector("#login");
    const signup = document.querySelector("#signup");

    login.addEventListener("click", () => {
        window.location.href = "./Login/login.html";
    })

    signup.addEventListener("click", () => {
        window.location.href = "./Signup/signup.html";
    })