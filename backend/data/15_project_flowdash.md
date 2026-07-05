# FlowDash — Team Management & Productivity Dashboard

## Links
- **Live Demo:** https://flowdash.onrender.com
- **GitHub:** https://github.com/aditya-singh2005/FlowDash
- **YouTube Demo:** https://www.youtube.com/watch?v=1E6jtFieUqg

> Note: FlowDash is hosted on Render's free tier, so the backend may go to sleep after inactivity. If the first login attempt is slow or fails, wait a few seconds and try again (2–3 attempts) — the free-tier limitation, not a bug.

## What it is

A feature-rich dashboard platform for team management, task tracking, and productivity visualization, built for both Admins and Employees to collaborate with clarity.

## Key features

### Role-based access
- Secure authentication with distinct Admin and Employee access levels
- Smart redirection based on role after login

### Admin Panel
- Comprehensive dashboards using Chart.js, Recharts, and Nivo for workflow, attendance, and department metrics
- Employee management with department-wise summaries
- Attendance tracking
- Leave request approval/rejection in real time
- Task assignment and progress monitoring across teams

### Employee Portal
- Profile management
- Real-time workflow dashboard for assigned tasks and deadlines
- Attendance marking with visual feedback
- Leave application and status tracking
- A "Personal Growth Hub" for learning resources and development tracking

## Authentication flow

Email/password sign-in → backend verifies credentials → issues a JWT → token stored client-side → protected routes (frontend and backend) require a valid token → role-based redirect to the Admin or Employee dashboard.

## Tech stack

- **Frontend:** React, Vite, TailwindCSS, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Auth:** JWT
