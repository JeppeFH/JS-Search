import { fetchProducts } from "./fetch_data.js";
import { productListTmpl } from "./templates.js";

const products = await fetchProducts();
const productContainer = document.querySelector(".productContainer");

export function search() {
  /* Udskrive vores søgeresultater  */
  function renderResult(result) {}

  productContainer.innerHTML = "";

  result.forEach((element) => {
    productContainer.insertAdjacentHTML("beforeend", productListTmpl);
  });

  /* Finder de produkter der lever op til søgekriterierne */
  function searchInput(event) {
    const searchTerm = event.target.value;

    const result = products.filter((product) =>
      product.title.includes(searchTerm)
    );

    renderResult(result);
  }

  const input = document.querySelector("#search");
  input.addEventListener("input", searchInput);
}
