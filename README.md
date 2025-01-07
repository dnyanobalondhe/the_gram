# The Gram

**The Gram** is a dynamic social media platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create accounts, upload images, like and comment on posts, and interact with other users in real-time.

## Features

- **User Registration & Login**: Users can create accounts and log in securely using JWT authentication.
- **Post Creation**: Users can upload images with captions.
- **Like & Comment**: Users can like and comment on posts.
- **User Profiles**: Each user has a personalized profile to view their posts and interactions.
- **Responsive Design**: A fully responsive user interface that works seamlessly on mobile and desktop devices.

## Technologies Used

- **Frontend**:
  - **React.js** for building the user interface
  - **Redux** for state management
  - **Axios** for making API requests
  - **React Router** for client-side routing
  - **Material UI** for styling and components

- **Backend**:
  - **Node.js** and **Express.js** for server-side development
  - **MongoDB** for database management (using **Mongoose** for object data modeling)
  - **JWT (JSON Web Tokens)** for user authentication and authorization

## Prerequisites

- **Node.js** (version 14 or above)
- **MongoDB** ( MongoDB Atlas for cloud database)

## Installation Instructions

1. **Clone the repository**:


2. **Navigate to the project directory**:


3. **Install dependencies**:

- Frontend:
  ```
  cd client
  npm install
  ```

- Backend:
  ```
  cd server
  npm install
  ```

4. **Set up environment variables**:

- **Backend**:
  - Create a `.env` file inside the `server/` folder and add the following variables:

  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  CLOUDINARY_URL=your_cloudinary_url (if using Cloudinary for image upload)
  ```

  - Replace `your_mongodb_connection_string` with your MongoDB connection string (from MongoDB Atlas or your local MongoDB instance).
  - Replace `your_jwt_secret_key` with a secret key for JWT.
  - (Optional) If you're using Cloudinary for image hosting, add your Cloudinary URL.

5. **Start the development servers**:

- **Frontend**:
  ```
  cd client
  npm start
  ```

- **Backend**:
  ```
  cd server
  npm start
  ```

6. **Access the app** in your browser at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## Usage

1. **Sign up or log in** to create an account.
2. Once logged in, you can create posts by uploading images with captions.
3. **Like and comment** on posts from other users.
4. **View your profile** to manage and view your posts.
5. **Follow users** to stay updated on their posts.

## Folder Structure

Here’s an overview of the project’s folder structure:

the-gram/ ├── client/ # React frontend │ ├── public/ # Public assets │ ├── src/ # React components and pages │ └── package.json # Frontend dependencies and scripts ├── server/ # Express backend │ ├── controllers/ # API request handlers │ ├── models/ # Mongoose models (e.g., User, Post) │ ├── routes/ # API routes │ ├── .env # Environment variables │ ├── server.js # Server entry point │ └── package.json # Backend dependencies and scripts ├── README.md # Project documentation └── .gitignore # Git ignore file


## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit pull requests.


