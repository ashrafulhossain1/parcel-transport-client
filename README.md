# Parcel Transportation Web Application

## 🚚 Project Overview
The **Parcel Transportation** web application simplifies parcel management, delivery, and tracking. It provides user-friendly features for **admins**, **delivery personnel**, and **customers**, ensuring a seamless experience for all stakeholders.

## 🌐 Live Website
[Parcel Transportation Client Site](https://parcel-transpotation.web.app/)

![Parcel Transportation Homepage](https://i.ibb.co.com/ymyTxj5g/Fire-Shot-Capture-035-Transport-Pro-Home-parcel-transpotation-web-app.png)

---

## 🔑 Admin & Delivery Man Credentials
- **Admin Login**:
  - Email: `arif@jaman.com`
  - Password: `A123456Aa`

- **Delivery Man Login**:
  - Email: `alexander@gmail.com`
  - Password: `D123456Aa`

---

## 🎯 Features
- **Admin Dashboard**:
  - Manage users, parcels, and delivery statuses.
  - Secure authentication system with role-based access control.

- **Delivery Personnel Dashboard**:
  - View assigned parcels.
  - Update delivery status in real-time.

- **Customer Features**:
  - Track parcels in real time.
  - View parcel delivery history.

---

## 🛠️ Technologies Used
- **Frontend**: React, Tailwind CSS, DaisyUI, ApexCharts, Recharts, React Query, React Router, Stripe.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Gateway**: Stripe
- **Hosting**: Firebase (frontend), Vercel/Render (backend)

---

## 🔧 Environment Setup

### **Step 1: Clone the Repositories**
1. **Client-Side Repository**:
   ```bash
   git clone https://github.com/ashrafulhossain1/parcel-transport-client.git
   cd parcel-transport-client
   ```

2. **Server-Side Repository**:
   ```bash
   git clone https://github.com/ashrafulhossain1/parcel-transport-server.git
   cd parcel-transport-server
   ```

---

### **Step 2: Set Up Environment Variables**

#### **Client-Side `.env` File**
Create a `.env` file in the root of the **client** directory and add the following Firebase credentials:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_firebase_app_id
```

#### **Server-Side `.env` File**
Create a `.env` file in the root of the **server** directory and add the following variables:
```env
DB_USER=your_db_user
DB_PASS=your_db_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> **Note**: Do not commit your `.env` file to the repository. Use `.env.example` files for reference.

---

### **Step 3: Install Dependencies**

#### **Client-Side**
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

#### **Server-Side**
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   nodemon start
   ```

---

## 📦 Dependencies & Dev Dependencies

### **Client-Side (React App)**

#### **Dependencies**
These are the main libraries used to build the application:
```json
"dependencies": {
    "@headlessui/react": "^2.2.0",               // Headless UI components for React
    "@react-hook/window-size": "^3.1.1",         // Hook for detecting window size
    "@stripe/react-stripe-js": "^3.1.1",         // Stripe integration for React
    "@stripe/stripe-js": "^5.5.0",               // Stripe.js library
    "@tanstack/react-query": "^5.64.1",          // Data fetching and caching library
    "@tanstack/react-router": "^1.97.3",         // React Router alternative
    "apexcharts": "^4.4.0",                      // Charting library
    "axios": "^1.7.9",                           // HTTP client for API requests
    "chart.js": "^4.4.7",                        // Chart.js for data visualization
    "firebase": "^11.2.0",                       // Firebase SDK
    "leaflet": "^1.9.4",                         // Map rendering library
    "localforage": "^1.10.0",                    // Offline storage solution
    "match-sorter": "^8.0.0",                    // Sorting utility
    "react": "^18.3.1",                          // React library
    "react-apexcharts": "^1.7.0",                // ApexCharts wrapper for React
    "react-awesome-reveal": "^4.3.1",            // Animation library
    "react-chartjs-2": "^5.3.0",                 // Chart.js wrapper for React
    "react-confetti": "^6.2.2",                  // Confetti animation
    "react-countup": "^6.5.3",                   // Number animation library
    "react-dom": "^18.3.1",                      // React DOM for rendering
    "react-helmet-async": "^2.0.5",              // SEO management
    "react-hook-form": "^7.54.2",                // Form handling library
    "react-hot-toast": "^2.5.1",                 // Toast notifications
    "react-icons": "^5.4.0",                     // Icon library
    "react-leaflet": "^4.0.0",                   // Leaflet integration for React
    "react-modal": "^3.16.3",                    // Modal component
    "react-parallax": "^3.5.1",                  // Parallax effect library
    "react-router-dom": "^7.1.3",                // React Router for navigation
    "recharts": "^2.15.0",                       // Data visualization library
    "sort-by": "^1.2.0",                         // Sorting utility
    "sweetalert2": "^11.15.10"                   // Alert and modal library
}
```

#### **Dev Dependencies**
These are tools used during development:
```json
"devDependencies": {
    "@eslint/js": "^9.17.0",                     // ESLint core
    "@types/react": "^18.3.18",                  // TypeScript types for React
    "@types/react-dom": "^18.3.5",               // TypeScript types for React DOM
    "@vitejs/plugin-react": "^4.3.4",            // Vite plugin for React
    "autoprefixer": "^10.4.20",                  // PostCSS plugin for vendor prefixes
    "daisyui": "^4.12.23",                       // Tailwind CSS component library
    "eslint": "^9.17.0",                         // Linter for code quality
    "eslint-plugin-react": "^7.37.2",            // ESLint plugin for React
    "eslint-plugin-react-hooks": "^5.0.0",       // ESLint plugin for React Hooks
    "eslint-plugin-react-refresh": "^0.4.16",    // ESLint plugin for React Refresh
    "globals": "^15.14.0",                       // Global variable definitions
    "postcss": "^8.5.1",                         // Tool for transforming CSS
    "tailwindcss": "^3.4.17",                    // Utility-first CSS framework
    "vite": "^6.0.5"                             // Build tool and development server
}
```

---

### **Server-Side (Node.js + Express)**

#### **Dependencies**
These are the main libraries used on the server:
```json
"dependencies": {
    "cors": "^2.8.5",                            // Cross-Origin Resource Sharing
    "dotenv": "^16.3.1",                         // Environment variable management
    "express": "^4.18.2",                        // Web framework for Node.js
    "jsonwebtoken": "^9.0.2",                    // JSON Web Token library
    "mongodb": "^6.3.0",                         // MongoDB driver
    "stripe": "^13.10.0"                         // Stripe payment gateway
}
```

#### **Dev Dependencies**
These are tools used during development:
```json
"devDependencies": {
    "nodemon": "^3.1.4"                          // Development server with auto-restart
}
```

---

## ⚡ Deployment Guidelines
1. Ensure the server is deployed and running without CORS, 404, or 504 errors.
2. Add your domain to Firebase for authorization.
3. Test all private routes and ensure the JWT token functions correctly.
4. Verify the live links:
   - Client: [Parcel Transportation Client Site](https://parcel-transpotation.web.app/)
   - Server: Deployed on Vercel or Render (update link as needed).

---

## 🌟 Commit Guidelines
- **Client**: Minimum 15 meaningful commits with descriptive messages.
- **Server**: Minimum 8 meaningful commits with descriptive messages.

---

## 👨‍💻 Contributors
- **Ashraful Hossain**

---

Feel free to explore the [Parcel Transportation Client Site](https://parcel-transpotation.web.app/) and experience the future of parcel management and delivery!
