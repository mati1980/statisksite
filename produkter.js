const endpoint = "https://kea-alt-del.dk/t7/api/products";

function hentData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(visData);
}

const temp = document.querySelector("#template").content;
const beholder = document.querySelector("main");

function visData(json) {
  console.log(json);
  json.forEach((produkt) => {
    console.log(produkt);
    const klon = temp.cloneNode(true);
    klon.querySelector("#productdisplayname").textContent = produkt.productdisplayname;
    klon.querySelector("#articletype").textContent = produkt.articletype;
    klon.querySelector("#price").textContent = produkt.price;
    klon.querySelector("#discount").textContent = produkt.discount;
    beholder.appendChild(klon);
  });
}

hentData();
