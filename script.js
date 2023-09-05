let containerCards;
const products = [
    {
        
        image:"llave-inglesa.png",
        name:"Lorem Ipsum Dolor Sit Amet Consectetur",
        index:1,
        oldPrice: "999",
        price:"699",
    },
    {
        image:"llave-inglesa.png",
        name:"Lorem Ipsum Dolor Sit Amet Consectetur",
        index:2,
        oldPrice: "999",
        price:"699",
    },
    {
        image:"llave-inglesa.png",
        name:"Lorem Ipsum Dolor Sit Amet Consectetur",
        index:3,
        oldPrice: "999",
        price:"699",
    },
    {
        image:"llave-inglesa.png",
        name:"Lorem Ipsum Dolor Sit Amet Consectetur",
        index:4,
        oldPrice: "999",
        price:"699",
    }
]

window.addEventListener("load", (event) => {
    products.forEach((producto) => {
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.className = 'card';
      containerCards = document.querySelector(".container-cards");
      containerCards.appendChild(tarjetaProducto);
        tarjetaProducto.innerHTML = `
        <div class="card-section1">
            <img class="stillson" src="${producto.image}" alt="">
            <div class="product-data">
                <h3 class="name-of-products">${producto.name}</h3>
                <p class="identifier-number">Identifier number ${producto.index}</p>
            </div>
            <p class="previous-price">$${producto.oldPrice}</p>
        </div>
        <div class="section-below">
            <div class="button-cart">
                <img class="shopping-bag" src="shopping-bag.png" alt="">
                <img class="plus" src="plus.png" alt="">
            </div>
            <div class="card-section2">
                <p class="actual-price">$${producto.price}</p>
            </div>
        </div>
        `;
    });
});
