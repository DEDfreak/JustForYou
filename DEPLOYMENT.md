# Vercel Deployment Guide

## 🚀 **Deployment Steps**

### **1. Git Setup Commands**

```bash
# Initialize Git repository
git init

# Add all files (except those in .gitignore)
git add .

# Create initial commit
git commit -m "Initial commit: Jewelry Design Studio website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### **2. Vercel Deployment**

1. **Go to [Vercel](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure project settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### **3. Environment Variables Setup**

In Vercel dashboard, go to **Settings > Environment Variables** and add:

```env
EMAIL_USER=ravishrishit@gmail.com
EMAIL_PASS=your-gmail-app-password
NODE_ENV=production
```

### **4. Deploy**

Click **"Deploy"** and wait for the build to complete.

## 📁 **Files Included in Git**

### ✅ **Included:**
- All source code (`src/`)
- Configuration files (`package.json`, `vite.config.js`, etc.)
- Public assets (`public/`)
- Documentation (`README.md`, `ADMIN_SETUP.md`, etc.)
- Vercel config (`vercel.json`)

### ❌ **Excluded (via .gitignore):**
- `node_modules/` (dependencies)
- `.env` (environment variables)
- `uploads/` (product images)
- Build outputs (`dist/`, `build/`)
- Log files
- IDE files
- OS files

## 🔧 **Vercel Configuration**

The `vercel.json` file handles:
- **Frontend:** Serves React app from `dist/`
- **Backend:** Routes `/api/*` to `server.js`
- **SPA Routing:** Serves `index.html` for all routes

## 🌐 **Post-Deployment**

### **Update API URLs:**
After deployment, update these files to use your Vercel URL:

1. **ContactSection.jsx:**
```javascript
const response = await fetch('https://your-app.vercel.app/api/contact', {
```

2. **Admin.jsx:**
```javascript
const response = await fetch('https://your-app.vercel.app/api/products', {
```

3. **ProductListing.jsx:**
```javascript
const response = await fetch('https://your-app.vercel.app/api/products');
```

### **Environment Variables:**
Set these in Vercel dashboard:
- `EMAIL_USER`
- `EMAIL_PASS`
- `NODE_ENV=production`

## 🎯 **Important Notes**

### **For Production:**
1. **Database:** Consider using MongoDB Atlas or similar
2. **Image Storage:** Use AWS S3 or Cloudinary for images
3. **Email Service:** Consider using SendGrid or similar
4. **Authentication:** Add admin login system

### **Limitations:**
- **File Uploads:** Vercel has limitations for file storage
- **Database:** No persistent storage on Vercel
- **Email:** Gmail app passwords work but consider alternatives

## 🔄 **Continuous Deployment**

Once set up:
- Every push to `main` branch auto-deploys
- Preview deployments for pull requests
- Automatic HTTPS and CDN

## 🚨 **Troubleshooting**

### **Build Errors:**
- Check Node.js version (>=18.0.0)
- Verify all dependencies in `package.json`
- Check build logs in Vercel dashboard

### **Runtime Errors:**
- Verify environment variables
- Check API endpoints
- Review server logs

Your website will be live at: `https://your-app-name.vercel.app` 