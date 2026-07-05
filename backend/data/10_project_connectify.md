# Connectify — Real-Time Chat Application

## Links
- **Live Demo:** https://connectify-qkf6.onrender.com/
- **GitHub:** https://github.com/aditya-singh2005/Connectify

## What it is

A full-stack, real-time chat application built on the MERN stack (MongoDB, Express, React, Node.js), using Socket.io for instant, bidirectional messaging.

## Key features

- Real-time messaging via Socket.io with event-driven architecture
- Online/offline presence tracking with live status updates across concurrent users
- Secure authentication with JWT + Bcrypt password hashing
- Global state management with Zustand
- Fully responsive UI (TailwindCSS + Daisy UI)
- Profile image uploads via Cloudinary
- Robust validation and error handling on both frontend and backend

## Tech stack

- **Frontend:** React.js, TailwindCSS, Daisy UI, Zustand, Lucide React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Real-time:** Socket.io
- **Security:** JWT, Bcryptjs
- **Storage:** Cloudinary

## Engineering notes

MongoDB Atlas schemas were designed specifically for low-latency message retrieval on a full-stack MERN system. This project is also the one I go deepest on when discussing systems-level topics — Socket.io's event-driven architecture, JWT auth flow, and the scaling limitations of the current design (e.g. what would need to change to support much higher concurrent user loads).
