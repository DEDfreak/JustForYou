// src/utils/api.js

// Get the base API URL based on environment
const getApiBaseUrl = () => {
  // In development, use localhost
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3002';
  }
  
  // In production, use the current domain (Netlify will handle the functions)
  return window.location.origin;
};

export const API_BASE_URL = getApiBaseUrl();

// API helper functions
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Specific API functions
export const getProducts = () => apiCall('/api/products');
export const getProduct = (id) => apiCall(`/api/products/${id}`);
export const createProduct = (productData) => apiCall('/api/products', {
  method: 'POST',
  body: JSON.stringify(productData),
});
export const deleteProduct = (id) => apiCall(`/api/products/${id}`, {
  method: 'DELETE',
});
export const submitContact = (contactData) => apiCall('/api/contact', {
  method: 'POST',
  body: JSON.stringify(contactData),
}); 