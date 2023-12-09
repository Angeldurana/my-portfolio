const Data = [
  { "id": 1, "name": "Uniqlo T-shirt", "category": "Clothing", "brand": "Uniqlo", "quantity": 1, "price": 10.00, "image": "images/UniqloT-shirt.jpg" },
  { "id": 2, "name": "Levi's Jeans", "category": "Clothing", "brand": "Levi's", "quantity": 1, "price": 50.00, "image": "images/LevisJeans.jpg" },
  { "id": 3, "name": "Nike Sneakers", "category": "Shoes", "brand": "Nike", "quantity": 1, "price": 60.00, "image": "images/NikeSneakers.jpg" },
  { "id": 4, "name": "Adidas Sandals", "category": "Shoes", "brand": "Adidas", "quantity": 1, "price": 40.00, "image": "images/AdidasSandals.jpg" },
  { "id": 5, "name": "Zara Dress", "category": "Clothing", "brand": "Zara", "quantity": 1, "price": 30.00, "image": "images/ZaraDress.jpg" },
  { "id": 6, "name": "H&M Skirt", "category": "Clothing", "brand": "H&M", "quantity": 1, "price": 20.00, "image": "images/H&MSkirt.jpg" },
  { "id": 7, "name": "Mango Blouse", "category": "Clothing", "brand": "Mango", "quantity": 1, "price": 15.00, "image": "images/MangoBlouse.jpg"  },
  { "id": 8, "name": "Christian Louboutin Heels", "category": "Shoes", "brand": "Christian Louboutin", "quantity": 1, "price": 70.00, "image": "images/ChristianLouboutinHeels.jpg"  },
  { "id": 9, "name": "The North Face Jacket", "category": "Clothing", "brand": "The North Face", "quantity": 1, "price": 40.00, "image": "images/TheNorthFaceJacket.jpg"  },
  { "id": 10, "name": "Gucci Hat", "category": "Accessories", "brand": "Gucci", "quantity": 1, "price": 10.00, "image": "images/GucciHat.jpg" },
  { "id": 11, "name": "Puma Running Shoes", "category": "Shoes", "brand": "Puma", "quantity": 1, "price": 55.00, "image": "images/PumaRunningShoes.jpg"  },
  { "id": 12, "name": "Calvin Klein Jeans", "category": "Clothing", "brand": "Calvin Klein", "quantity": 1, "price": 75.00, "image": "images/CalvinKleinJeans.jpg"  },
  { "id": 13, "name": "Tommy Hilfiger Polo", "category": "Clothing", "brand": "Tommy Hilfiger", "quantity": 1, "price": 45.00, "image": "images/TommyHilfigerPolo.jpg"  },
  { "id": 14, "name": "Vans Sneakers", "category": "Shoes", "brand": "Vans", "quantity": 1, "price": 50.00, "image": "images/VansSneakers.jpg"  },
  { "id": 15, "name": "Forever 21 Dress", "category": "Clothing", "brand": "Forever 21", "quantity": 1, "price": 25.00, "image": "images/Forever21Dress.jpg"  },
  { "id": 16, "name": "Ray-Ban Sunglasses", "category": "Accessories", "brand": "Ray-Ban", "quantity": 1, "price": 120.00, "image": "images/Ray-BanSunglasses.jpg"  },
  { "id": 17, "name": "Converse Sneakers", "category": "Shoes", "brand": "Converse", "quantity": 1, "price": 55.00, "image": "images/ConverseSneakers.jpg"  },
  { "id": 18, "name": "Ralph Lauren Polo", "category": "Clothing", "brand": "Ralph Lauren", "quantity": 1, "price": 60.00, "image": "images/RalphLaurenPolo.jpg"  },
  { "id": 19, "name": "Steve Madden Boots", "category": "Shoes", "brand": "Steve Madden", "quantity": 1, "price": 85.00, "image": "images/SteveMaddenBoots.jpg"  },
  { "id": 20, "name": "Fossil Watch", "category": "Accessories", "brand": "Fossil", "quantity": 1, "price": 90.00, "image": "images/FossilWatch.jpg"  },
  { "id": 21, "name": "Gap T-shirt", "category": "Clothing", "brand": "Gap", "quantity": 1, "price": 15.00, "image": "images/GapT-shirt.jpg" },
  { "id": 22, "name": "New Balance Sneakers", "category": "Shoes", "brand": "New Balance", "quantity": 1, "price": 65.00, "image": "images/NewBalanceSneakers.jpg"  },
  { "id": 23, "name": "Fendi Handbag", "category": "Accessories", "brand": "Fendi", "quantity": 1, "price": 300.00, "image": "images/FendiHandbag.jpg"  },
  { "id": 24, "name": "Diesel Jeans", "category": "Clothing", "brand": "Diesel", "quantity": 1, "price": 80.00, "image": "images/DieselJeans.jpg"  },
  { "id": 25, "name": "Skechers Running Shoes", "category": "Shoes", "brand": "Skechers", "quantity": 1, "price": 70.00, "image": "images/SkechersRunningShoes.jpg"  }
];

renderProducts(Data);
function renderProducts(products) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    const productDetailsElement = document.createElement('div');
    productDetailsElement.className = 'product-details';
    productDetailsElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Brand: ${product.brand}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
    `;

    const productImageElement = document.createElement('img');
    productImageElement.src = product.image;
    productImageElement.alt = product.name;

    productElement.appendChild(productDetailsElement);
    productElement.appendChild(productImageElement);
    productsContainer.appendChild(productElement);
  });
}

function filterProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const categoryFilter = document.getElementById('category').value;
  const maxPrice = parseFloat(document.getElementById('price').value) || Infinity;

  const filteredProducts = Data.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    const categoryMatch = !categoryFilter || product.category === categoryFilter;
    const priceMatch = product.price <= maxPrice;

    return nameMatch && categoryMatch && priceMatch;
  });

  renderProducts(filteredProducts);
}
