const productList = document.getElementById("product-list");

products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");

    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

    div.innerHTML = `
    <a href="product.html?id=${product.id}" class="product-link">
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-details">
        <h3>${product.name}</h3>
        <div class="price">₹${product.price}</div>
        <div class="rating">${stars}</div>
      </div>
    </a>
  `;

    productList.appendChild(div);
});
