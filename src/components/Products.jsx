import React from "react";
import ProductCard from "./ProductCard.jsx"; // Import child component
import "./Product.css";

function Products() {
  const productData = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/62/c7/b1/62c7b1836aefeda5f9ef9e332ec3daac.jpg",
      name: "Pichkarie",
      price: "2.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
    quantity:1
    },
    {
      id: 2,
      image: "https://i.pinimg.com/236x/eb/06/c1/eb06c1881b0f80be419ff3afad1c3aae.jpg",
      name: "Colors",
      price: "5.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
      quantity:1
    },
    {
      id: 3,
      image: "https://i.pinimg.com/236x/c4/89/5b/c4895b78acf761affda7f56dca4ffd25.jpg",
      name: "Balloons",
      price: "6.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
      quantity:1
    },
    {
      id: 4,
      image: "https://i.pinimg.com/236x/9c/43/6d/9c436dadf4685001c74102c355638135.jpg",
      name: "Sweets",
      price: "10.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
      quantity:1
    },
    {
      id: 5,
      image: "https://i.pinimg.com/236x/5e/05/01/5e05015f0487414a29134e1a583b67f3.jpg",
      name: "T-Shirts",
      price: "12.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
      quantity:1
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/88/96/db/8896dbddfbd89d13b5bc2f27706f2f88.jpg",
      name: "Items",
      price: "5.00",
      description: "Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.",
      quantity:1
    },
    
  ];

  return (
    <section className="wrapper" id="product">
      <div className="product">
        <div className="product-heading">
          <h1>Our Products</h1>
          <p>
            Discover our carefully curated selection of premium products,
            thoughtfully chosen and expertly crafted to elevate your everyday
            lifestyle with enhanced style, comfort, and lasting sophistication.
          </p>
        </div>

        <div className="product-cards">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
