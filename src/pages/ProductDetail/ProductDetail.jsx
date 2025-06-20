import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Header from "../../components/common/Header";
import { getProduct } from "../../utils/api";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Error loading product');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#faf9f6] min-h-screen">
        <Header showContactButton={false} />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-8">
            <p className="text-[#2b2024] font-['Heebo']">Loading product...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2b2024] mb-4 font-['Old_Standard_TT']">
            {error || 'Product not found'}
          </h1>
          <Link to="/products">
            <Button className="bg-[#d4af37] hover:bg-[#c19d2c]">
              Return to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <Header showContactButton={false} />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-[#2b2024bf] mb-8">
          <Link to="/" className="hover:text-[#d4af37]">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#d4af37]">Products</Link>
          <span>/</span>
          <span className="text-[#d4af37]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500?text=Image+Not+Available';
              }}
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#2b2024] mb-4 font-['Old_Standard_TT']">
              {product.name}
            </h1>
            <p className="text-2xl text-[#d4af37] font-semibold mb-4 font-['Old_Standard_TT']">
              {product.price}
            </p>
            <p className="text-[#2b2024bf] text-lg mb-8 font-['Heebo']">
              {product.description}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#2b2024] mb-4 font-['Old_Standard_TT']">
                Product Details
              </h2>
              <ul className="space-y-2">
                {product.details && product.details.map((detail, index) => (
                  <li key={index} className="text-[#2b2024bf] font-['Heebo']">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full bg-[#d4af37] text-[#1c1c1c] hover:bg-[#c19d2c] text-lg py-6 font-['Old_Standard_TT']">
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
