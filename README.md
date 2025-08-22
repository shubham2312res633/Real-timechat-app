Hello\! Based on the source code for your full-stack chat application, here is a detailed `README.md` file you can use for your GitHub repository.

### `README.md`

# Real-Time Chat App 💬

This is a full-stack, real-time chat application built using the MERN stack, Socket.IO, and Tailwind CSS. The app allows users to register, log in, chat with other users, share images, and see online/offline status in real-time.

-----

## 🚀 Features

  * **User Authentication:** Secure signup and login with hashed passwords and JWT-based authentication.
  * **Real-Time Messaging:** Instant message delivery using WebSocket technology (Socket.IO).
  * **User Presence:** See which users are currently online.
  * **User Profiles:** Users can update their profile information and profile picture.
  * **Image Sharing:** Send images in chat, which are stored in the cloud.
  * **Unseen Message Count:** Displays the number of new messages from each user.
  * **Search Functionality:** Filter through the list of users to find a specific contact.
  * **Responsive UI:** A clean, mobile-friendly interface designed with Tailwind CSS.

-----

## 🛠️ Technologies

### Frontend

  * **React:** For building the user interface.
  * **React Router:** For client-side routing.
  * **Tailwind CSS:** For styling and a responsive design.
  * **Context API:** For global state management (Authentication and Chat data).
  * **Socket.IO Client:** For real-time communication with the server.

### Backend

  * **Node.js & Express.js:** The server-side framework for building the REST API.
  * **MongoDB & Mongoose:** A NoSQL database with Mongoose for Object Data Modeling (ODM).
  * **Socket.IO:** For real-time, bidirectional event-based communication.
  * **bcrypt.js:** For secure password hashing.
  * **jsonwebtoken:** For handling JSON Web Tokens (JWT) for authentication.
  * **Cloudinary:** For cloud-based image storage and management.
  * **dotenv:** For managing environment variables.

-----

## 📂 Project Structure

The project is structured into `client` (for the React frontend) and `server` (for the Node.js backend) directories.

### Frontend (`client/`)

```
src/
├── assets/             # Images and icons used in the UI
├── components/         # Reusable UI components
│   ├── ChatContainer.jsx
│   ├── RightSidebar.jsx
│   ├── Sidebar.jsx
│   └── ...
├── context/            # React Context for global state
│   ├── AuthContext.jsx
│   └── ChatContext.jsx
├── pages/              # Main application pages
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── ProfilePage.jsx
├── App.jsx             # Main application component and routing
└── main.jsx            # Entry point for the React app
```

### Backend (`server/`)

```
controllers/
├── messageController.js  # Logic for handling message-related requests
└── userController.js     # Logic for handling user authentication and profile requests
lib/
├── cloudinary.js         # Cloudinary configuration
└── db.js                 # MongoDB connection setup
middleware/
└── auth.js               # JWT authentication middleware
models/
├── message.js            # Mongoose schema for messages
└── User.js               # Mongoose schema for users
routes/
├── messageRoutes.js      # API routes for messages
└── userRoutes.js         # API routes for authentication
server.js                 # Main server entry point
```

-----

## ⚙️ Setup and Installation

### Prerequisites

  * Node.js (LTS version recommended)
  * MongoDB Atlas account or a local MongoDB instance
  * Cloudinary account

### Backend Setup

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>/server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` directory and add your environment variables:
    ```
    PORT=5000
    MONGODB_URI=<Your-MongoDB-Connection-String>
    JWT_SECRET=<Your-JWT-Secret>
    CLOUDINARY_CLOUD_NAME=<Your-Cloudinary-Cloud-Name>
    CLOUDINARY_API_KEY=<Your-Cloudinary-API-Key>
    CLOUDINARY_API_SECRET=<Your-Cloudinary-API-Secret>
    ```
4.  Run the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1.  Navigate to the client directory:
    ```bash
    cd <your-repo-name>/client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the frontend development server:
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or the port specified by Vite).
