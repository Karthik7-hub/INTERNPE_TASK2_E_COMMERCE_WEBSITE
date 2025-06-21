if (window.location.pathname.includes("cart.html")) {
    const cartItems = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='cart-empty'>🛒 Your cart is empty.</p>";
    }
    else {
        let total = 0;

        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "cart-item";

            div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <div class="cart-details">
          <h3>${item.name}</h3>
          <div class="rating">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</div>
          <div class="price">₹${item.price}</div>
          <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;

            cartItems.appendChild(div);
            total += item.price;
        });

        const totalEl = document.createElement("div");
        totalEl.className = "cart-total";
        totalEl.textContent = `Total: ₹${total}`;
        cartItems.appendChild(totalEl);

        const actionDiv = document.createElement("div");
        actionDiv.className = "cart-actions";

        const buyNowBtn = document.createElement("button");
        buyNowBtn.className = "buy-now buy-cart";
        buyNowBtn.textContent = "Buy Now";
        buyNowBtn.onclick = () => {
            alert("Thanks for your purchase!");
            localStorage.removeItem("cart");
            location.reload();
        };

        actionDiv.appendChild(buyNowBtn);
        cartItems.appendChild(actionDiv);
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    };
}