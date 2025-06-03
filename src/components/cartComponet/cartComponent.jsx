import React, { useState } from "react";

export const CartComponent = ({ addTOCart }) => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      image:
        "https://i8.amplience.net/i/jpl/jd_ANZ0128468_a?qlt=92&w=984&h=1255&v=1&fmt=auto",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 599.99,
      image:
        "https://i8.amplience.net/i/jpl/jd_ANZ0125555_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    },
    {
      id: 3,
      name: "Headphones",
      price: 199.99,
      image:
        "https://i8.amplience.net/i/jpl/jd_CZ9831-010_C_0001_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    },
    {
      id: 4,
      name: "Camera",
      price: 499.99,
      image:
        "https://i8.amplience.net/i/jpl/jd_ANZ0125538_a?qlt=92&w=984&h=1255&v=1&fmt=auto",
    },
    {
      id: 5,
      name: "Headphones",
      price: 199.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c3191074-4ea8-494e-bd5f-e75c0357219a/AIR+JORDAN+1+LOW+SE.png",
    },
    {
      id: 6,
      name: "Camera",
      price: 499.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5177ab73-1f54-41cb-9ec9-5095eca4e69c/K+NSW+CLUB+FLC+HDY+LBR.png",
    },
    {
      id: 7,
      name: "Headphones",
      price: 199.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed228574-1bdc-44a1-8a91-24f22af63ebb/AIR+JORDAN+1+MID+SE.png",
    },
    {
      id: 8,
      name: "Camera",
      price: 499.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/35847a53-a6e5-427e-9023-0b9361b1c0dc/W+NSW+CLLCTN+NK+WR+TWILL+JKT.png",
    },
    {
      id: 9,
      name: "Headphones",
      price: 199.99,
      image:
        "https://i8.amplience.net/i/jpl/jd_CZ9831-010_C_0001_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    },
    {
      id: 10,
      name: "Camera",
      price: 499.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b06933c-8f4e-4dfb-bd1c-bab25728c1b8/W+NSW+STREET+WVN+JKT.png",
    },
    {
      id: 11,
      name: "Headphones",
      price: 199.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4e06622-576f-4b92-a3d9-fa94886bafda/AIR+MAX+DN8.png",
    },
    {
      id: 12,
      name: "Camera",
      price: 499.99,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58cc0333-0e3d-4257-a47d-61984f1699fd/M+J+MVP+JUMPMAN+SS+CREW.png",
    },
  ];
  //add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      {/* navbar with cart buttom */}

      <nav className="navbar1">
        <div style={{ textAlign: "center", fontSize: "32px" }}>
          Best sellers product 2025
        </div>
        <div>
          <button className="cart-button"> cart({cart.length})</button>
        </div>
      </nav>

      {/* product list */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.xname}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addTOCart(product)}
              className="add-to-cart-button"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
