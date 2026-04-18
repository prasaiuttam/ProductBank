import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/shoes.png";
import image2 from "../assets/shirt.png";
import image3 from "../assets/cap.png";

 function Home() {

  const productNewArrivals=[
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

  const whyChooseUsContent =[
      {
        title: "Free Shipping",
        desc: "On all orders over $50",
        icon: "🚚",
      },
      {
        title: "Secure Payment",
        desc: "100% safe transactions",
        icon: "🔒",
      },
      {
        title: "Easy Returns",
        desc: "30-day return policy",
        icon: "↩️",
      },
      {
        title: "24/7 Support",
        desc: "We’re here to help anytime",
        icon: "💬",
      },
    ];

  const brands = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Ray-Ban",
    logo: "https://www.svgrepo.com/show/303313/ray-ban-logo.svg",
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  },
  {
    name: "Sneakers",
    logo: "https://cdn-icons-png.flaticon.com/512/2589/2589903.png",
  },
];

  return (
    <div className="bg-gray-50">

 <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          
        <div>
          <img src={image1} alt="Slide 1"   className="w-full h-[400px] object-cover" />
          <p className=" legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} alt="Slide 2"   className="w-full h-[400px] object-cover" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image3} alt="Slide 3"   className="w-full h-[400px] object-cover" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>


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
          {productNewArrivals.map((product) => (
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

      <div className="bg-gray-50 py-8 px-6">
      
      {/* Heading */}
     <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Brand Partners
        </h1>
        <p className="mt-4 text-gray-600">
          We collaborate with top global brands to bring you the best products.
        </p>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>

    </div>

<section className="max-w-7xl mx-auto px-4">
  <h2 className="text-2xl font-semibold text-gray-900 text-center mt-8 mb-6">
    Why Choose Us
  </h2>


  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    {whyChooseUsContent.map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center"
      >
        <div className="text-3xl mb-4">{item.icon}</div>
        <h3 className="text-lg font-medium text-gray-900">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>




    </div>
  );
} export default Home;
