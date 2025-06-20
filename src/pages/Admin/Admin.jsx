import React, { useState } from "react";
import Header from "../../components/common/Header";
import Button from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/card";
import { createProduct } from "../../utils/api";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, we'll use a placeholder image URL since file upload isn't supported in Netlify Functions
      const productData = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        image: previewUrl || "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      };

      const result = await createProduct(productData);
      setSubmitStatus({ type: 'success', message: 'Product added successfully!' });
      setFormData({
        name: "",
        description: "",
        price: "",
        image: null,
      });
      setPreviewUrl("");
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error adding the product. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <Header showContactButton={false} />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#2b2024] mb-8 font-['Old_Standard_TT']">
          Admin Dashboard
        </h1>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#2b2024] mb-6 font-['Old_Standard_TT']">
              Add New Product
            </h2>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#2b2024] mb-2 font-['Heebo']" htmlFor="name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-['Heebo']"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#2b2024] mb-2 font-['Heebo']" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-['Heebo']"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#2b2024] mb-2 font-['Heebo']" htmlFor="price">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-['Heebo']"
                  placeholder="e.g., $1,299"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[#2b2024] mb-2 font-['Heebo']" htmlFor="image">
                  Product Image (Preview Only)
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-['Heebo']"
                  disabled={isSubmitting}
                />
                <p className="text-sm text-gray-600 mt-1">
                  Note: File upload will use a placeholder image for now. In production, integrate with a cloud storage service.
                </p>
                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full max-w-md mx-auto h-64 object-cover rounded"
                    />
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d4af37] text-[#1c1c1c] hover:bg-[#c19d2c] text-lg py-4 font-['Old_Standard_TT'] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
