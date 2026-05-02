// import { createContext, useContext, useState } from "react";

// const ProductContext = createContext();

// export function ProductProvider({ children }) {
//   const [products, setProducts] = useState([]);
//     const [allProduct, ] = useState([
//        {
//               id: 1,
//               name: "Minimal Sneakers",
//               price: "$79",
//               image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//             },
//             {
//               id: 2,
//               name: "Classic Watch",
//               price: "$149",
//               image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//             },
//             {
//               id: 3,
//               name: "Leather Backpack",
//               price: "$129",
//               image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
//             },
//             {
//               id: 4,
//               name: "Stylish Sunglasses",
//               price: "$59",
//               image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
//             }
//     ]);




//   const addProduct = (product) => {
//     setProducts(prev => [...prev, product]);
//   };

//   return (
//     <ProductContext.Provider value={{ products, addProduct,allProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export function useProduct() {
//   return useContext(ProductContext);
// }

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: "Minimal Sneakers",
    price: "$79",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Classic Watch",
    price: "$149",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: "$129",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    price: "$59",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
];

export function ProductProvider({ children }) {
  // ✅ Single source of truth — starts with initial products
  const [allProduct, setAllProduct] = useState(initialProducts);

  // ✅ Adds new product into the same array ProductList reads from
  const addProduct = (newProduct) => {
    setAllProduct((prev) => [...prev, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ allProduct, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}