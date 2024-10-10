`# Blog Application Client

This is the client-side of a blog application that allows users to create, view, and manage blog posts. Built with React, this application integrates with a Node.js server for user authentication and blog management.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Stripe**: For handling payments through Stripe Checkout.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog-application-client` 

2.  Install the dependencies:
    
    bash
    
    Copy code
    
    `npm install` 
    
3.  Create a `.env` file in the root directory and add your environment variables:
    
    plaintext
    
    Copy code
    
    `REACT_APP_BACKEND_URL=http://localhost:5000
    REACT_APP_STRIPE_PUBLIC_KEY=<your_stripe_public_key>` 
    
    Replace `<your_stripe_public_key>` with your actual Stripe publishable key.
    

### Running the Client

Start the client application:

bash

Copy code

`npm start` 

The application will run on [http://localhost:3000](http://localhost:3000).


### Features

-   **User Authentication**:
    -   Sign up for a new account.
    -   Sign in to an existing account.
-   **Blog Management**:
    -   Create new blog posts.
    -   View all blogs in a grid layout.
    -   View individual blog details.
    -   Update existing blog posts (if implemented).
    -   Delete blog posts (if implemented).
-   **Payment Processing**:
    -   Secure payment processing through Stripe Checkout.
    -   Payments are required to create new blogs.

### API Endpoints

The client interacts with the following API endpoints on the server:

-   **User Authentication**:
    
    -   `POST /api/users/signup`: Sign up a new user.
    -   `POST /api/users/signin`: Sign in an existing user.
-   **Blog Management**:
    
    -   `GET /api/blogs`: Retrieve all blogs.
    -   `GET /api/blogs/:id`: Retrieve a specific blog by ID.
    -   `POST /api/blogs`: Create a new blog (requires authentication).
    -   `PUT /api/blogs/:id`: Update an existing blog (requires authentication).
    -   `DELETE /api/blogs/:id`: Delete a blog (requires authentication).
-   **Payment Handling**:
    
    -   `POST /api/payments/create-checkout-session`: Create a new Stripe Checkout session.

### Testing with Stripe

To test Stripe payments, use the following test card number:

-   **Card Number**: `4242 4242 4242 4242`
-   **Expiration Date**: Any future date (e.g., `12/34`)
-   **CVC**: Any 3-digit number (e.g., `123`)