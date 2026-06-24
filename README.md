# DevJunction

A full-stack job marketplace platform built with the MERN stack. Employers can post jobs and freelancers can browse and bid on opportunities across different categories.

**Live Link:** <https://simple-project-2-687f2.web.app/>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

---

## About

DevJunction is a freelance job marketplace where employers can post job opportunities and freelancers can browse, bid, and manage their projects. The platform supports three job categories: Web Development, Digital Marketing, and Graphics Design. This was built as a learning project during my MERN stack journey — **100% human written, no AI assistance.**

---

## Features

### For Employers

- Post new jobs with title, description, deadline, price range, and category
- View all your posted jobs in one place
- Receive and manage bid requests from freelancers
- Accept or reject bids

### For Freelancers

- Browse jobs by category using tabbed navigation
- View detailed job descriptions before bidding
- Place bids on jobs with your proposed price
- Track all your bids and their statuses (Pending, In Progress, Rejected, Complete)

### General

- Email/Password registration and login
- Google OAuth sign-in
- JWT authentication with httpOnly cookies for protected routes
- Responsive design (mobile, tablet, desktop)
- Custom error page for 404 routes
- Loading spinners during async operations

---

## Tech Stack

### Frontend

- **React 18** — UI library
- **Vite** — Build tool and dev server
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind component library
- **Firebase** — Authentication (Email/Password + Google OAuth)
- **Axios** — HTTP client
- **React Bootstrap** — UI components
- **SweetAlert2** — Alert/modal library
- **React Icons** — Icon library
- **React Responsive Carousel** — Image carousel for banner
- **React Tabs** — Tabbed navigation component

### Backend

- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB** — NoSQL database
- **MongoDB Native Driver** — Database connection
- **JSON Web Token (JWT)** — Token-based authentication
- **Cookie Parser** — Cookie handling middleware
- **CORS** — Cross-origin resource sharing
- **dotenv** — Environment variable management

---

## Project Structure

```
DevJunction/
├── DevJunction-client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Images, logos, static files
│   │   ├── contextProvider/     # React Context (Auth)
│   │   │   └── AuthProvider.jsx
│   │   ├── ErrorPage/           # 404 error page
│   │   ├── Firebase/            # Firebase config
│   │   │   └── firebase.config.js
│   │   ├── Hooks/               # Custom React hooks
│   │   ├── Layout/              # Main layout wrapper
│   │   │   └── MainBody.jsx
│   │   ├── Pages/
│   │   │   ├── BidRequests/     # Manage incoming bids
│   │   │   ├── Home/            # Home page
│   │   │   │   ├── Banner/      # Image carousel
│   │   │   │   ├── Contributor/ # Top contributors section
│   │   │   │   └── Tabs/        # Job category tabs
│   │   │   ├── JobDetails/      # Individual job view + bid form
│   │   │   ├── Login&Registration/ # Auth pages
│   │   │   ├── Mybids/          # User's placed bids
│   │   │   ├── MyPosts/         # User's posted jobs
│   │   │   ├── Navbar & Footer/ # Shared components
│   │   │   └── Post Job/        # Job posting form
│   │   ├── Root/
│   │   └── Routes/              # Route definitions
│   │       ├── PrivateRoute.jsx # Protected route wrapper
│   │       └── routes.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── firebase.json            # Firebase hosting config
│
├── DevJunction-server/          # Express backend
│   ├── index.js                 # Main server file
│   ├── package.json
│   └── vercel.json              # Vercel deployment config
│
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** instance (local or MongoDB Atlas)
- **Firebase** project (for authentication)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/DevJunction.git
   cd DevJunction
   ```

2. Install server dependencies:

   ```bash
   cd DevJunction-server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../DevJunction-client
   npm install
   ```

### Environment Variables

Create a `.env` file in `DevJunction-server/`:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret_key
PORT=3000
```

Update `DevJunction-client/src/Firebase/firebase.config.js` with your Firebase config (already configured in the project).

### Running the App

1. Start the backend server:

   ```bash
   cd DevJunction-server
   npm start
   ```

   Server runs on `http://localhost:3000`

2. Start the frontend dev server:

   ```bash
   cd DevJunction-client
   npm run dev
   ```

   Client runs on `http://localhost:5173`

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/jwt` | Generate JWT token and set cookie |

### Jobs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/category` | Get all job categories |
| GET | `/jobs` | Get all jobs |
| POST | `/jobs` | Create a new job |
| GET | `/jobs/:id` | Get job by ID |
| GET | `/myjobs` | Get jobs by user email (query: `?email=`) |

### Bids

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/bids` | Get bids by job ID (query: `?id=`) |
| GET | `/bids/:id` | Get single bid by ID |
| POST | `/bids` | Place a new bid |
| PATCH | `/bids` | Update bid (add seller info, query: `?id=`) |
| GET | `/bidrequest` | Get bid requests by buyer email (query: `?email=`) |

---

## Authentication

- **Firebase Auth** handles user sign-up and login (Email/Password + Google OAuth)
- After login, the client sends a POST request to `/jwt` with the user's email
- The server generates a JWT token stored as an `httpOnly` cookie
- Protected routes (My Bids, Bid Requests, Job Details) check for valid JWT via `PrivateRoute` component
- CORS is configured to allow the Firebase hosting domain and localhost

---

## Deployment

- **Frontend:** Deployed on Firebase Hosting
- **Backend:** Deployed on Vercel (configured via `vercel.json`)
- MongoDB database hosted on MongoDB Atlas

---

## Acknowledgements

Built during my MERN stack learning phase. This project helped me understand:

- Full-stack CRUD operations
- JWT authentication with cookies
- Protected routes and private routes
- Firebase authentication integration
- MongoDB Atlas database management
- Responsive design with Tailwind CSS and DaisyUI
- RESTful API design with Express.js

---

**Note:** This project was 100% human written as part of my learning journey. No AI tools were used in its creation.
