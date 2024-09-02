import { fetchProducts } from "./fetch_data.js";
import { productListTmpl } from "./templates.js";

const products = await fetchProducts();
const productContainer = document.querySelector(".product-container");

export function search() {
  /* Udskrive vores søgeresultater  */
  function renderResult(result) {
    productContainer.innerHTML = "";

    result.forEach((element) => {
      productContainer.insertAdjacentHTML(
        "beforeend",
        productListTmpl(element)
      );
    });
  }

  /* Finder de produkter der lever op til søgekriterierne */
  function searchInput(event) {
    const category = document.querySelector("#category").value;
    const searchTerm = event.target.value.trim().toLowerCase();

    if (category == "all") {
      const result = products.filter((product) =>
        product.title.trim().toLowerCase().includes(searchTerm)
      );

      renderResult(result);
    } else {
      /* specifik kategorier */
      const findCategory = products.filter(
        (product) => product.category === category
      );
      const result = findCategory.filter((product) =>
        product.title.toLowerCase().trim().includes(searchTerm)
      );

      renderResult(result);
    }
  }

  const input = document.querySelector("#search");
  input.addEventListener("input", searchInput);
}
