## iNoteBook

iNoteBook is a simple and intuitive note-taking web application built with React for the frontend and Node.js/Express for the backend. Users can create, edit, delete, and manage notes, and access their notes securely after logging in.

**Features**

1).User Authentication: Login and signup with JWT authentication.

2).Add, Edit & Delete Notes: Manage your notes efficiently.

3).Account Management: View and update user details.

4).Responsive UI: Built with Bootstrap for a clean and responsive design.

5).Alerts: Success and error messages for better user experience.

## Getting Started

These instructions will help you set up the project on your local machine

## Prerequisites

1).Node.js (v16 or higher recommended)
2).npm (v8 or higher recommended)

## Installation

Clone the repository:

git clone <repository-url>
cd iNoteBook
2).Install frontend dependencies:

npm install
3).Install backend dependencies (if backend is separate):

cd backend
npm install

Running the App

1. Start the backend server
   npm run server
   By default, the backend runs on http://localhost:8000
   .

2. Start the frontend app
   npm start
3. Start the frontend app
   npm start

Open http://localhost:3000
in your browser to use iNoteBook.

## Available Scripts

In the project directory, you can run:

1. npm start
   Runs the React app in development mode. Page reloads on code changes.

2. npm run build
   Builds the app for production into the build folder.

3. npm test
   Launches the test runner in interactive watch mode.

4. npm run eject
   Ejects the Create React App configuration (one-way operation).

## Folder Structure

inotebook/
├── backend/ # Express server, routes, models
├── src/ # React frontend
│ ├── components/ # All React components (Navbar, Home, Notes, etc.)
│ ├── context/ # React Context API for state management
│ ├── App.js # Main App component with routing
│ └── index.js # App entry point
├── package.json # Frontend dependencies
└── README.md # This file

### Learn More

- [React Documentation](https://react.dev)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Express Documentation](https://expressjs.com/)
