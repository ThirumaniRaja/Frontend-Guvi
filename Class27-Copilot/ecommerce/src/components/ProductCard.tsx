import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

import type { Product } from "../types";

type Props = {
  product: Product;
  onAdd?: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAdd,
}: Props) {
  const rating = product.rating ?? 0;

  const image =
    product.thumbnail ??
    product.images?.[0] ??
    "https://picsum.photos/500";

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full"
    >
      <Link to={`/product/${product.id}`}>

        <div className="relative overflow-hidden aspect-square">

          <img
            src={image}
            alt={product.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute top-4 left-4 bg-black text-white text-xs rounded-full px-3 py-1">
            New
          </span>

          <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">

            <Star
              size={14}
              fill="#facc15"
              color="#facc15"
            />

            <span className="text-xs font-semibold">
              {rating.toFixed(1)}
            </span>

          </div>

        </div>

      </Link>

      <div className="p-6 flex flex-col flex-1">

        <Link
          to={`/product/${product.id}`}
          className="flex-1"
        >

          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {product.title}
          </h3>

          <p className="text-gray-500 mt-3 text-sm line-clamp-2">
            {product.description}
          </p>

        </Link>

        <div className="mt-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </h2>

            <p className="text-gray-400 text-xs">
              Inclusive of taxes
            </p>

          </div>

          <button
            onClick={() => onAdd?.(product)}
            className="bg-black hover:bg-cyan-500 text-white rounded-full p-3 transition"
          >
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>
    </motion.article>
  );
}