import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
            productsPerPage * page
          }`
        );
        const data = await response.json();

        if (data.products.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data.products]);
          setPage((prev) => prev + 1);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    const onIntersection = (entries) => {
      const loaderItem = entries[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 1.0,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, page]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          console.log("Product:", product);
          return (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>

      {/* Loader */}
      {hasMore ? (
        <div
          ref={loaderRef}
          className="text-center py-6 text-gray-500 animate-pulse"
        >
          Loading more products...
        </div>
      ) : (
        <p className="text-center py-6 text-gray-500">No more products</p>
      )}
    </div>
  );
}
