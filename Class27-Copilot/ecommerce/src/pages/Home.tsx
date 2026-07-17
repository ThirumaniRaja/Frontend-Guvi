import { Link } from "react-router-dom";
import FeaturedCard from "../components/FeaturedCard";
import "./Home.css";

const categories = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
  },
  {
    title: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    title: "Home",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
  },
  {
    title: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
  },
  {
    title: "Watches",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
  }
];

export default function Home() {
  return (
    <main className="bg-gray-100">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center px-8 py-20 gap-10">

          <div>

            <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm mb-6">
              New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              Discover Products
              <br />
              You'll Love
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Shop thousands of premium products with amazing deals,
              fast delivery and trusted brands.
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                to="/shop"
                className="bg-orange-500 hover:bg-orange-600 px-7 py-4 rounded-xl font-semibold"
              >
                Shop Now
              </Link>

              <Link
                to="/shop"
                className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-black"
              >
                Explore
              </Link>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
              className="rounded-3xl shadow-2xl"
              alt=""
            />

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>

          <Link to="/shop" className="text-orange-500">
            View All
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((cat) => (

            <Link
              key={cat.title}
              to="/shop"
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition group"
            >

              <div className="h-40 overflow-hidden">

                <img
                  src={cat.image}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-4 text-center font-semibold">

                {cat.title}

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* FLASH SALE */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-orange-500 text-white p-10 flex justify-between items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Flash Sale
            </h2>

            <p className="mt-3 text-orange-100">
              Up to 60% OFF selected products.
            </p>

          </div>

          <Link
            to="/shop"
            className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            Shop Deals
          </Link>

        </div>

      </section>

      {/* FEATURED */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <Link to="/shop" className="text-orange-500">
            View All
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeaturedCard
            title="Nike Air Max"
            price="$199"
            img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
          />

          <FeaturedCard
            title="Apple Watch"
            price="$499"
            img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
          />

          <FeaturedCard
            title="Sony Headphones"
            price="$249"
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
          />

          <FeaturedCard
            title="Leather Backpack"
            price="$149"
            img="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"
          />

        </div>

      </section>

      {/* PROMOTION */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-slate-900 text-white rounded-3xl p-10">

            <h2 className="text-4xl font-bold">
              Summer Collection
            </h2>

            <p className="mt-5 text-gray-300">
              Discover premium fashion curated for modern lifestyles.
            </p>

            <button className="mt-8 bg-orange-500 px-6 py-3 rounded-xl">
              Shop Collection
            </button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            className="rounded-3xl h-full object-cover"
          />

        </div>

      </section>

      {/* BRANDS */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">

          <div className="bg-white rounded-2xl p-8 shadow">Nike</div>
          <div className="bg-white rounded-2xl p-8 shadow">Apple</div>
          <div className="bg-white rounded-2xl p-8 shadow">Sony</div>
          <div className="bg-white rounded-2xl p-8 shadow">Samsung</div>
          <div className="bg-white rounded-2xl p-8 shadow">Puma</div>

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="bg-slate-900 text-white">

        <div className="max-w-5xl mx-auto text-center py-20 px-6">

          <h2 className="text-4xl font-bold">
            Subscribe to our Newsletter
          </h2>

          <p className="text-gray-400 mt-5">
            Get exclusive offers and latest product updates.
          </p>

          <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">

            <input
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl text-black w-full md:w-96"
            />

            <button className="bg-orange-500 px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}