# Admin Panel v2

This project is a full-stack web application, likely an admin panel, built using React.js for the frontend and Node.js with Express.js for the backend. It provides a structure for managing data and application functionalities.

## Features

* **User Management:** The application includes the ability to create, retrieve, update, and delete users.
* **Authentication:** The application uses JWT (JSON Web Token) authentication for user authentication.
* **Other Functionality:** The backend also provides routes and controllers for podcasts, URL shortening, analytics, YouTube integration, and file uploads.
* **Frontend:** The frontend is a React.js application.
* **Backend:** The backend is a Node.js application using Express.js.
* **Database:** The application uses MongoDB for data storage.

## Technical Details

### Frontend (React.js)

The frontend is built using React.js and utilizes React Router for navigation.

\* Key components and files:

\* \`App.js\`: Main application component.

\* \`Navbar.js\`: Navigation bar component.

\* \`LoginPage.js\`: Login page component.

\* \`SignupPage.js\`: Signup page component.

\* \`DashboardPage.js\`: Dashboard page component.

\* \`ProtectedRoute.js\`: Component to protect routes that require authentication.

\* \`AuthContext.js\`: Context to manage user authentication state.

\* \`api.js\`: Handles communication with the backend API.

\* The application uses CSS Modules for styling.

### Backend (Node.js/Express.js)

The backend is built using Node.js and Express.js.

\* Key functionalities:

\* User authentication (signup, login) using JWT.

\* User management.

\* Podcast management.

\* URL shortening.

\* Analytics.

\* YouTube integration.

\* File uploads.

\* Key directories and files:

\* \`server.js\`: Main entry point for the Express server.

\* \`config/db.js\`: Database connection setup (MongoDB).

\* \`models/\`: Defines the data models (e.g., \`User.js\`).

\* \`controllers/\`: Contains the logic for handling requests (e.g., \`authController.js\`, \`userController.js\`).

\* \`routes/\`: Defines the API endpoints (e.g., \`authRoutes.js\`, \`userRoutes.js\`).

\* \`middleware/\`: Contains middleware functions (e.g., \`authMiddleware.js\`).

### Database (MongoDB)

The application uses MongoDB to store data, including user information, podcast details, and other application-related data.

## Setup Instructions

### Prerequisites

\* Node.js

\* npm or yarn

\* MongoDB

### Backend Setup

1.  Clone the repository.
2.  Navigate to the \`backend\` directory.
3.  Install dependencies: \`npm install\` or \`yarn install\`.
4.  Set up environment variables:

\* Create a \`.env\` file in the \`backend\` directory.

\* Add the following (and any other necessary) environment variable:

    \`\`\`

    MONGODB\_URI=your\_mongodb\_connection\_string

    JWT\_SECRET=your\_jwt\_secret\_key

    \`\`\`
5.  Start the MongoDB server.
6.  Start the backend server: \`npm start\` or \`yarn start\`. The server will run on http://localhost:3000.

### Frontend Setup

1.  Navigate to the \`frontend\` directory.
2.  Install dependencies: \`npm install\` or \`yarn install\`.
3.  Build the application: \`npm run build\`.
4.  Start the frontend: \`npm start\` or \`yarn start\`. (Often, the frontend is served by the backend in a production deployment, but for development, you might have a separate server).

### Deployment

\* A typical deployment involves building the frontend and serving the static assets from the backend. The backend server needs to be configured to handle routing for the single-page application.

\* The application can be deployed to various hosting platforms like Heroku, AWS, or a VPS.

\* Ensure that the backend environment variables (especially \`MONGODB\_URI\` and \`JWT\_SECRET\`) are correctly configured in the deployment environment.

## Project Structure

\`\`\`

├── backend/

│   ├── config/

│   │   └── db.js # Database connection setup

│   ├── controllers/

│   │   ├── analyticsController.js

│   │   ├── authController.js

│   │   ├── podcastController.js

│   │   ├── shortenerController.js

│   │   ├── userController.js

│   │   ├── uploadController.js

│   │   └── youtubeController.js

│   ├── middleware/

│   │   └── authMiddleware.js

│   ├── models/

│   │   └── User.js # User schema

│   ├── routes/

│   │   ├── analyticsRoutes.js

│   │   ├── authRoutes.js

│   │   ├── podcastRoutes.js

│   │   ├── shortenerRoutes.js

│   │   ├── uploadRoutes.js

│   │   ├── userRoutes.js

│   │   └── youtubeRoutes.js

│   ├── services/

│   │   └── youtube.js

│   ├── utils/

│   │   └── uptimeMonitor.js

│   ├── .env # Environment variables (DB connection string, JWT secret)

│   ├── package.json

│   ├── server.js # Main entry point for the Express server

│   └── uploads/ # For file uploads

│

├── frontend/

│   ├── public/ # Static assets

│   ├── src/

│   │   ├── components/

│   │   │   ├── Navbar.js

│   │   │   └── ProtectedRoute.js

│   │   ├── contexts/

│   │   │   └── AuthContext.js

│   │   ├── pages/

│   │   │   ├── DashboardPage.js

│   │   │   ├── HomePage.js

│   │   │   ├── LoginPage.js

│   │   │   └── SignupPage.js

│   │   ├── App.js

│   │   ├── index.js

│   │   ├── services/

│   │   │   └── api.js

│   │   └── router/

│   │   └── index.js

│   ├── .gitignore

│   ├── package.json

│   └── README.md

│

└── README.md # This file

\`\`\`
