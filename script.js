let containerFeatured;
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
      if(jsonData.featured == true){
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.className = 'card';
      containerFeatured = document.querySelector(".container-featured");
      containerFeatured.appendChild(tarjetaProducto);
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
            <button class="button-cart">
                <img class="shopping-bag" src="shopping-bag.png" alt="">
                <img class="plus" src="plus.png" alt="">
            </button>
            <div class="card-section2">
                <p class="actual-price">$${jsonData.price}</p>
            </div>
        </div>
        `;
      }
    });
});

let containerSales;

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
      if(jsonData.onSale == true){
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.className = 'card';
      containerSales = document.querySelector(".container-sales");
      containerSales.appendChild(tarjetaProducto);
        tarjetaProducto.innerHTML = `
        <div class="card">
            <div class="card-section1 ofert1">
                <img class="stillson" src="${jsonData.image}" alt="">
                <div class="label-ofert">
                    <svg class="label" xmlns="http://www.w3.org/2000/svg" width="101" height="102" viewBox="0 0 101 102" fill="none">
                        <path d="M43.8356 53.4503L47.715 53.524L45.9068 46.6443L43.8356 53.4503Z" fill="#941B0C"/>
                        <path d="M95.4068 46.6657L84.004 34.8229C81.5008 32.2231 76.7125 30.1323 73.1037 30.0637L25.4015 29.1513C23.3627 29.1119 21.4271 29.8729 19.9501 31.2939C18.4732 32.7149 17.6388 34.6196 17.5998 36.6572L17.0663 64.5157C17.0274 66.5533 17.7887 68.4889 19.2098 69.9649C20.6314 71.4413 22.5368 72.2754 24.5756 72.3147L72.2778 73.2264C75.8866 73.2957 80.7514 71.3895 83.3522 68.8873L95.2005 57.4882C98.2419 54.5613 98.3345 49.7064 95.4068 46.6657ZM82.0391 53.9897C81.4913 53.9789 80.959 53.7464 80.5789 53.3516C80.1984 52.9564 79.9871 52.4166 79.9976 51.8694C80.0069 51.3211 80.2398 50.7894 80.6352 50.409C81.0301 50.0291 81.5698 49.8175 82.1187 49.8287C82.666 49.8392 83.1973 50.0713 83.5777 50.4664C83.9579 50.8612 84.1703 51.4015 84.1602 51.949C84.1493 52.4965 83.9175 53.0279 83.5226 53.4079C83.1273 53.7882 82.5864 54.0002 82.0391 53.9897Z" fill="#941B0C"/>
                        <text fill="#FFF" x="27" y="62">10%</text>
                    </svg>
                </div>
                <div class="product-data">
                    <h3 class="name-of-products">${jsonData.title}</h3>
                    <p class="identifier-number">Identifier number ${jsonData.id}</p>
                </div>
                    <p class="previous-price">$${jsonData.previousPrice}</p>
            </div>
            <div class="section-below">
                <button class="button-cart ofert-button">
                    <img class="shopping-bag" src="shopping-bag.png" alt="">
                    <img class="plus" src="plus.png" alt="">
                </button>
                <div class="card-section2 ofert2">
                    <p class="actual-price">$${jsonData.price}</p>
                </div>
            </div>
        </div>
        `;
    }
  });
});