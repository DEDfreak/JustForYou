import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import Header from "../../components/common/Header";
import { getProducts } from "../../utils/api";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error loading products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#faf9f6] min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2b2024] mb-8 font-['Old_Standard_TT']">
            Our Collection
          </h1>
          <div className="text-center py-8">
            <p className="text-[#2b2024] font-['Heebo']">Loading products...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#faf9f6] min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2b2024] mb-8 font-['Old_Standard_TT']">
            Our Collection
          </h1>
          <div className="text-center py-8">
            <p className="text-red-600 font-['Heebo']">{error}</p>
            <button 
              onClick={fetchProducts}
              className="mt-4 bg-[#d4af37] text-[#1c1c1c] px-4 py-2 rounded hover:bg-[#c19d2c] font-['Heebo']"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#2b2024] mb-8 font-['Old_Standard_TT']">
          Our Collection
        </h1>
        
        {products.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[#2b2024] font-['Heebo']">No products available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-[#2b2024] font-['Old_Standard_TT']">
                        {product.name}
                      </h2>
                      <p className="text-[#2b2024bf] mt-2 font-['Heebo']">
                        {product.description}
                      </p>
                      <p className="text-[#d4af37] font-semibold mt-2 font-['Old_Standard_TT']">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
