import React from "react";

 function Home() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Your Next Favorite Product
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Shop the latest trends with unbeatable prices and fast delivery.
          </p>

          <div className="mt-6 flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800">
              Shop Now
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100">
              Browse Categories
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="Shopping"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
 <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">New Arrivals</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-black">View all</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
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
          ].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
} export default Home;
