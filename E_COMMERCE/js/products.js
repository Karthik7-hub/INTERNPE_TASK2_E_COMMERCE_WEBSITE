const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1299,
        rating: 4,
        description: "Experience high-quality sound and comfort with our latest wireless headphones.",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmLY0RiNKIRxMmHD6yab8ebXzZGzsRT5UK9v8ndw1QKUef-tH5KJgOfBGUJd4we_iGDv-0bVSSTwrklRPv_w-2U_3aOsZVKS851B5R30ZmwfYwHheYjLkqdg"
    },
    {
        id: 2,
        name: "Computer",
        price: 2999,
        rating: 5,
        description: "Track your health and stay connected with our modern smart watch.",
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499,
        rating: 3,
        description: "Portable Bluetooth speaker with deep bass and long battery life.",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTB48OjVdy3Nc8_Rus1um3oh6Jtexm5cAI7aeUrSUy78M2Nk_PgEe1W5Jy_Mpkq2P-uYqRK3SLuX0dn2gqDqwcEyY7soBNhNp3IaKcZL1IGfVtCX-NhgKmo"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 1299,
        rating: 4,
        description: "A SmartWatch with fitness tracking and Bluetooth funtionalities.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixlrDW7An164-7KEbY_FVCO7vcHWqLK3Afw&s"
    },

    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 2499,
        rating: 5,
        description: "Tactile feedback with classic clicky sound for pro gamers.",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Gaming Monitor",
        price: 10999,
        rating: 4,
        description: "27-inch full HD monitor with 144Hz refresh rate.",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/6/WD/AK/BJ/55002018/asus-gaming-monitor-500x500.jpg"
    },
    {
        id: 7,
        name: "Gaming Mouse",
        price: 799,
        rating: 4,
        description: "Precision and speed with customizable RGB lights.",
        img: "https://www.jiomart.com/images/product/original/rvdukxjtan/entwino-d1-gaming-mouse-for-laptop-gaming-pc-usb-wired-rgb-lights-optical-mouse-for-computer-product-images-orvdukxjtan-p594705374-0-202210202205.jpg?im=Resize=(1000,1000)"
    },
    {
        id: 8,
        name: "Console Controller",
        price: 1499,
        rating: 4,
        description: "Compatible with PC and consoles with ergonomic grip.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21"
    },

];
if (window.location.pathname.includes("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = "<h2 style='text-align:center;'>Product not found</h2>";
    } else {
        document.querySelector(".product-preview img").src = product.img;
        document.querySelector(".product-preview img").alt = product.name;
        document.querySelector(".product-info h1").textContent = product.name;
        document.querySelector(".product-info .price").textContent = `₹${product.price}`;
        document.querySelector(".product-info .rating").textContent = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);
        document.querySelector(".product-info .description").textContent = product.description;

        // Buy Now button
        const buyBtn = document.createElement("button");
        buyBtn.className = "buy-now buy-product";
        buyBtn.textContent = "Buy Now";
        buyBtn.onclick = () => alert("Thank you for purchasing " + product.name + "!");
        document.querySelector(".product-info").appendChild(buyBtn);

        // Add to cart function
        window.addToCart = function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        }
    }
}
