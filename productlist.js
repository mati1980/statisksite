//https://kea-alt-del.dk/t7/api/products

//hent data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
  const data = await response.json();
  console.log(data);
  //loop for hver
  data.forEach(showProduct);
}
getData();

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //clon
  const copy = template.cloneNode(true);
  //skifte data
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  //append
  document.querySelector("main").appendChild(copy);
}
