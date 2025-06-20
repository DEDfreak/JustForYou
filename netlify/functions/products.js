// netlify/functions/products.js
const products = [
  {
    id: 1,
    name: "Diamond Engagement Ring",
    price: "$2,999",
    image: "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "1.5 carat diamond set in 18k white gold"
  },
  {
    id: 2,
    name: "Pearl Necklace",
    price: "$899",
    image: "https://images.pexels.com/photos/989967/pexels-photo-989967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Freshwater pearl strand with 14k gold clasp"
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    price: "$1,299",
    image: "https://images.pexels.com/photos/12404353/pexels-photo-12404353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Blue sapphire and diamond drop earrings"
  },
  {
    id: 4,
    name: "Gold Bracelet",
    price: "$799",
    image: "https://images.pexels.com/photos/10875710/pexels-photo-10875710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "18k gold chain bracelet with custom clasp"
  }
];

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const path = event.path.replace('/.netlify/functions/products', '');
  const method = event.httpMethod;

  try {
    // GET all products
    if (method === 'GET' && path === '') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(products)
      };
    }

    // GET single product
    if (method === 'GET' && path.startsWith('/')) {
      const id = parseInt(path.substring(1));
      const product = products.find(p => p.id === id);
      
      if (product) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(product)
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Product not found' })
        };
      }
    }

    // POST new product
    if (method === 'POST') {
      const { name, description, price, image } = JSON.parse(event.body);
      
      if (!name || !description || !price) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: 'Name, description, and price are required' })
        };
      }

      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        description,
        price,
        image: image || "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      };

      products.push(newProduct);
      
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newProduct)
      };
    }

    // DELETE product
    if (method === 'DELETE' && path.startsWith('/')) {
      const id = parseInt(path.substring(1));
      const productIndex = products.findIndex(p => p.id === id);
      
      if (productIndex > -1) {
        products.splice(productIndex, 1);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Product deleted successfully' })
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Product not found' })
        };
      }
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: 'Not found' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
}; 