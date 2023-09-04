let products = [
    {
        image: "llave-inglesa.png",
        name: "Lorem ipsum dolor sit amet consectetur",
        idNumber: "identifer number",
        oldPrice: "$999",
        price: "$699",
    },

    {
        image: "llave-inglesa.png",
        name: "Lorem ipsum dolor sit amet consectetur",
        idNumber: "identifer number",
        oldPrice: "$999",
        price: "$699",
    },

    {
        image: "llave-inglesa.png",
        name: "Lorem ipsum dolor sit amet consectetur",
        idNumber: "identifer number",
        oldPrice: "$999",
        price: "$699",
    }
];

array.forEach((producto)=>{
    const newDiv = document.createElement("div");
    newDiv.className = "container-cards"
    const fDiv = document.querySelector(".featured-products");
    fDiv.appendChild(newDiv);
    newDiv.innerHTML = `
    <div class=“info”>
    <img id=“imgf” src=“${array[0].productImg}” alt=“”>
    <h3>${array[0].productName}</h3>
    <p>${array[0].productId}</p>
  </div>
  <div class=“bottom”>
    <button class=“addCart”></button>
    <div class=“prices”>
      <p class=“listPrice”></p>
      <p class=“price”>${array[0].productPrice}</p>
    </div>
  </div>
    `

    `
    <div class=“info”>
    <img id=“imgf” src=“${array[0].productImg}” alt=“”>
    <h3>${array[0].productName}</h3>
    <p>${array[0].productId}</p>
  </div>
  <div class=“bottom”>
    <button class=“addCart”></button>
    <div class=“prices”>
      <p class=“listPrice”></p>
      <p class=“price”>${array[0].productPrice}</p>
    </div>
  </div>
    `





























