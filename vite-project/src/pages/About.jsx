

function About() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

     

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Product Bank
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Your trusted destination for high-quality products at unbeatable value.
            We bring convenience, quality, and affordability together.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="About"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Mission"
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            At Product Bank, our mission is to simplify online shopping by offering
            a curated selection of reliable, affordable, and trending products.
            We aim to deliver a seamless shopping experience you can trust.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">

          {[
            {
              title: "Quality",
              desc: "We ensure every product meets high standards before reaching you.",
            },
            {
              title: "Affordability",
              desc: "Competitive pricing without compromising quality.",
            },
            {
              title: "Customer First",
              desc: "Your satisfaction drives everything we do.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
            >
              <h4 className="text-sm font-medium text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center pb-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Start Shopping Today
        </h3>
        <p className="text-gray-600 mb-6">
          Discover products you'll love at prices you'll appreciate.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800">
          Browse Products
        </button>
      </section>

      
    </div>
  );
} export default About;