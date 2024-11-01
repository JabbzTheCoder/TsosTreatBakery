## Tso's Bakery Web Application (MERN Stack)

**Project Name:** Tso's Bakery Web App

**Introduction:**

This web application allows customers of Tso's Bakery to browse delicious baked goods, add items to their cart, place orders, and make secure online payments. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project provides a user-friendly and convenient way for customers to enjoy Tso's Bakery offerings from the comfort of their homes.

**Live Demo:** https://tsostreatlanding.netlify.app/

**Author(s):**  Kamogelo Motlhale - https://www.linkedin.com/in/kamogelo-motlhale-abb53b14a/

**Installation:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JabbzTheCoder/TsosTreatBakery
   ```
2. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   cd backend
   npm install
   ```
3. **Set up MongoDB:**
   Create a MongoDB database and configure the connection string in `backend/config.js`.
4. **Configure PayFast and Courier Guy APIs:**
   - Create PayFast and Courier Guy API accounts and obtain your API keys.
   - Update the `backend/config.js` file with your PayFast and Courier Guy API credentials.

5. **Start the development servers:**
   ```bash
   cd frontend
   npm start
   cd backend
   npm start
   ```
   The frontend will be accessible at `http://localhost:3000` and the backend will be running on a different port (default is 3001).

**Usage:**

* **Browse products:** View available bakery products on the homepage.
* **Add to cart:** Click the "Add to Cart" button on product pages.
* **View cart:** Check items in your cart and update quantities.
* **Checkout:** Proceed to checkout and enter shipping information.
* **Payment:** Select a payment method and complete the transaction using PayFast.
* **Shipping:** Orders will be shipped using Courier Guy.

**Authentication:**

* We use JSON Web Tokens (JWT) for authentication. Users can create accounts and log in to access protected features.

**Testing:**

* We will use a popular JavaScript testing library like Jest or Mocha to write unit and integration tests for the frontend and backend.
* Tests will cover various scenarios, including:
    - API endpoints
    - Component rendering
    - Data validation
    - Authentication and authorization

**Deployment:**

* We will deploy the application to Netlify for a seamless and efficient deployment process.
* Netlify provides features like continuous deployment, automatic HTTPS, and global CDN.

**Contributing:**

We welcome contributions to this project! If you'd like to contribute, please fork the repository and submit a pull request. Before submitting a pull request, please ensure your code adheres to the existing code style and conventions.

**Related Projects:**

*Check my other Repos*
    * https://github.com/JabbzTheCoder

**Licensing:**

This project is licensed under the MIT License.  A copy of the license is available in the `LICENSE` file.

