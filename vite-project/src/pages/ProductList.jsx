import React from "react";
import { useNavigate } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/shoes.png";
import image2 from "../assets/shirt.png";
import image3 from "../assets/cap.png";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";


function ProductList() {
  const navigate = useNavigate();
  const { allProduct } = useProduct();
  const { addProduct } = useCart();          // ← cart context





const onClickDetails = (id) => navigate(`/product/${id}`);
  const handleAddToCart = (product) => addProduct(product);   // ← uses cart


return (
    <div className="bg-gray-50">

     

 <div className="flex items-center justify-between mb-6">

  <div className="flex gap-3 mt-4">
    <button
      onClick={() => navigate("/add-product")}
      className="bg-black text-white text-sm font-medium py-2 px-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all"
    >
      + Add New Product
    </button>
    {/* <a href="#" className="text-sm text-gray-600 hover:text-black self-center">View all</a> */}
  </div>
</div>


      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Products</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-black">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {allProduct?.map((product) => (
            <div
              key={product.id}
              onClick={() => onClickDetails(product.id)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.price}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                  className="mt-3 w-full bg-black text-white text-sm font-medium py-2 px-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-150"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ProductList;







