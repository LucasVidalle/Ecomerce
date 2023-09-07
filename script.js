let containerCards;
// const PRODUCTS_HARDCODED = [
//     {
        
//         image:"llave-inglesa.png",
//         name:"Lorem Ipsum Dolor Sit Amet Consectetur",
//         index:1,
//         oldPrice: "999",
//         price:"699",
//     },
//     {
//         image:"llave-inglesa.png",
//         name:"Lorem Ipsum Dolor Sit Amet Consectetur",
//         index:2,
//         oldPrice: "999",
//         price:"699",
//     },
//     {
//         image:"llave-inglesa.png",
//         name:"Lorem Ipsum Dolor Sit Amet Consectetur",
//         index:3,
//         oldPrice: "999",
//         price:"699",
//     },
//     {
//         image:"llave-inglesa.png",
//         name:"Lorem Ipsum Dolor Sit Amet Consectetur",
//         index:4,
//         oldPrice: "999",
//         price:"699",
//     }
// ]

async function fetchProducts() {
    const apiURL = "https://64f659ae2b07270f705e6753.mockapi.io/api/products";
    const apiResponse = await fetch(apiURL)
    const jsonData = await apiResponse.json();
    console.log(apiResponse.status); // 200
    return jsonData;
}

window.addEventListener("load", async (event) => {

    const products = await fetchProducts();
    products.forEach((jsonData) => {
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.className = 'card';
      containerCards = document.querySelector(".container-cards");
      containerCards.appendChild(tarjetaProducto);
        tarjetaProducto.innerHTML = `
        <div class="card-section1">
            <img class="stillson" src="${jsonData.image}" alt="">
            <div class="product-data">
                <h3 class="name-of-products">${jsonData.title}</h3>
                <p class="identifier-number">Identifier number ${jsonData.id}</p>
            </div>
            <p class="previous-price">$${jsonData.previousPrice}</p>
        </div>
        <div class="section-below">
            <div class="button-cart">
                <img class="shopping-bag" src="shopping-bag.png" alt="">
                <img class="plus" src="plus.png" alt="">
            </div>
            <div class="card-section2">
                <p class="actual-price">$${jsonData.price}</p>
            </div>
        </div>
        `;
    });
});
