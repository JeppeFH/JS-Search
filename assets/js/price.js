import { fetchProducts } from "./fetch_data.js";
import { productListTmpl } from "./templates.js";

let products = await fetchProducts();
const priceContainer = document.querySelector("#price-container");

export function price() {
  function renderResult(price) {
    priceContainer.innerHTML = "";

    result.forEach((element) => {
      priceContainer.insertAdjacentHTML("beforeend", productListTmpl(element));
    });
  }
}
