import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";

function Product() 
{
  const { id } = useParams();
  const { allProduct, addProduct } = useProduct();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => 
  {
    const productInfo = allProduct.find((item) => item.id === parseInt(id));
    setCurrentProduct(productInfo);
  }, [allProduct]); 

  if (!currentProduct) return <p className="text-center mt-10">Loading...</p>; 

  const handleAddToCart = () => 
  {
    for (let i = 0; i < quantity; i++) addProduct(currentProduct);
  };

  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full rounded-2xl shadow-lg bg-white">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <img
              src={currentProduct.image} 
              alt={currentProduct.name}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{currentProduct.name}</h1>
              <p className="text-gray-600 mb-4">{currentProduct.description}</p>
              <p className="text-xl font-semibold mb-4">{currentProduct.price}</p>
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-200 rounded">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <button
            onClick={handleAddToCart}
            className="w-full text-lg bg-black text-white py-3 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-150">
            Add to Cart</button>
          </div>
       </div>
       </div>
    </div>
  );
}

export default Product;