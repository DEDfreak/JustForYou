import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Debug: Log environment variables (without showing password)
console.log('Email configuration:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : '***NOT SET***');
console.log('PORT:', process.env.PORT || 3001);

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'ravishrishit@gmail.com',
    pass: process.env.EMAIL_PASS // Use Gmail App Password
  }
});

// Test email connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('Email server connection error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// In-memory storage for products (in production, use a database)
let products = [
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

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Product endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.post('/api/products', upload.single('image'), (req, res) => {
  try {
    const { name, description, price } = req.body;
    
    if (!name || !description || !price) {
      return res.status(400).json({ message: 'Name, description, and price are required' });
    }

    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name,
      description,
      price,
      image: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : null
    };

    products.push(newProduct);
    
    console.log('New product added:', newProduct);
    
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex > -1) {
    products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Log the form data (for debugging)
    console.log('Received form submission:', { name, email, phone, service, message });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'ravishrishit@gmail.com',
      to: 'ravishrishit@gmail.com',
      cc: 'pmurarka1@gmail.com',
      subject: `New Contact Form Inquiry - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This inquiry was submitted from your jewelry design studio website.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again later.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 