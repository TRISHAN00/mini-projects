import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ProductCard
        image="https://via.placeholder.com/300x200"
        title="Wireless Headphones"
        price="99.99"
        description="High quality wireless headphones with noise cancellation and 20h battery life."
        onAddToCart={() => alert("Added to cart!")}
      />
   
    </div>
  );
}
