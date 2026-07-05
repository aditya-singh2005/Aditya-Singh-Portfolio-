# Skill Swap Platform (Odoo Hackathon 2025)

## Links
- **GitHub:** https://github.com/aditya-singh2005/odoo-skillswap

## What it is

A community-driven web platform where people offer skills they have and request skills they want to learn — without any monetary exchange involved. Built as a 4-person team for the Odoo Hackathon 2025, where I worked as the frontend developer.

## Team

I worked alongside a backend developer (Flask + DB), a designer/UX lead, and a database + testing lead — a genuinely collaborative build where each person owned a distinct layer of the stack.

## Features

- **User profiles** — name, location, optional profile photo, availability windows, public/private visibility toggle
- **Skill management** — list skills you can offer and skills you want to learn; search/browse by skill
- **Swap requests** — request swaps with other users, accept/reject/cancel offers, track pending and current swap status
- **Ratings & feedback** — rate completed swaps 1–5 stars with written feedback
- **Admin dashboard** — reject inappropriate skill listings, ban policy-violating users, monitor all swaps, review user reports, broadcast platform-wide messages
- **Reports & logs** — downloadable feedback summaries and user activity tracking

## Tech stack

- **Frontend:** React.js + Tailwind CSS (my part)
- **Backend:** Python, Flask, Flask-CORS
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy
- **Other:** dotenv, Flask-Migrate

## Database design

Core tables: `users` (with `is_admin`/`is_banned` flags), `skills`, `swap_requests`, `feedback`, `admin_actions`, `user_reports` — built with a mix of raw SQL and SQLAlchemy ORM.

## What I took from this one

This was a good exercise in working across a real team boundary — owning the frontend cleanly while coordinating with a Flask backend I didn't write myself, which meant getting API contracts right and communicating clearly instead of just building in isolation.
