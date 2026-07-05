# Connecti — My Own Startup Idea (In Progress)

## Why I'm building this

Connecti is my own original idea, not a hackathon prompt I responded to. It tackles a real problem I noticed myself — genuinely: how many people have I probably walked past who I already had a reason to know? Once fully built, it has the potential to be my biggest and most impactful project, because it's designed to actually help real users reconnect in the physical world, and it has a real business model behind it. It's still under active development (MVP stage), so I don't have deployed users or live metrics yet — but I'm building it the right way, carefully, and privacy-first from day one, rather than rushing it out.

## The problem

People miss hundreds of real-world networking opportunities every year simply because they don't know who's physically around them — a former classmate in the same building, an alumnus at the same café, a recruiter at the same conference, a colleague on another floor, someone from your university on the same flight. Existing platforms require you to actively search for people. Connecti makes these discoveries happen naturally, in the background.

## The core idea

Connecti helps people discover meaningful opportunities to connect with others they already have real context with — it's explicitly **not** another "people nearby" app, not Tinder, not Bumble, not Snap Map. It's about re-connection, not meeting strangers.

## Privacy-first, consent-based design

This is the part I'm most proud of. Connecti never exposes anyone's precise location. It only determines whether two users satisfy proximity + relevance conditions (mutual connections, shared university, shared company, shared event, etc.) — and even then, both users stay anonymous until **both** choose to interact. Nothing is one-sided:

1. The backend detects a meaningful proximity + context match.
2. A vague notification is sent — e.g. "Someone from your university is nearby" — no exact location revealed.
3. Only if **both** parties express mutual interest does communication unlock.

This phased, mutual-consent approach means two strangers can meet in public, privacy-first and consent-based, without the discovery process feeling weird, random, or invasive to either side. Both parties agree before anything happens.

Users can also set visibility levels: Hidden, Friends Only, Mutual Connections, Alumni Only, Work Circle, Event Participants, or Custom Groups — and can pause discovery or go invisible entirely whenever they want.

## Who it's for

- **Students** — e.g. two DTU students studying in the same library who never realize it
- **Working professionals** — engineers, designers, PMs, founders working from the same coworking space without knowing it
- **Conference/hackathon/event attendees** — via a temporary "Event Mode" that auto-expires after the event
- **Travelers** — at airports, hotels, cafés, coworking spaces

## How it works, end to end

1. User signs in and joins networking circles (college, workplace, alumni, friends, professional, startup, clubs)
2. User optionally enables location permissions
3. Background services periodically evaluate proximity via geofencing
4. Backend checks for mutual connections, shared organization/company/university/event/interests
5. If a meaningful match exists, both users get a vague, privacy-preserving notification
6. Only after mutual interest is expressed can the two actually chat

## Key features

- Secure authentication (Email, Google Sign-In, JWT)
- Rich user profiles (university, company, grad year, skills, interests, bio)
- Networking circles (college, workplace, alumni, startup, professional, friends, clubs, events)
- Granular privacy controls (pause discovery, hide temporarily, approve every interaction)
- Background proximity detection + geofencing, tuned to minimize battery usage
- A smart match engine weighing distance, relationship graph, mutual friends, shared context, and interests
- Mutual consent system — no unilateral visibility, ever
- Event Mode for conferences/hackathons/meetups, auto-expiring
- A networking feed showing recent nearby opportunities and missed connections
- Built-in secure chat (text, images, files, meeting requests) unlocked only post-consent
- Temporary visibility windows (30 min / 1 hr / today / event-only)
- Personal analytics — people met, opportunities created, networking history

## Tech stack

- **Mobile:** Expo, React Native, Kotlin (Android native modules)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Auth:** JWT + Google OAuth
- **Real-time:** WebSockets, Socket.io
- **Location:** Expo Location, Android Location APIs, Geofencing APIs
- **Notifications:** Firebase Cloud Messaging
- **Maps:** Google Maps SDK
- **Cloud:** Google Cloud Platform
- **Storage:** Cloudinary
- **State management:** Zustand / React Context

## Architecture (high level)

```
React Native App → Authentication → REST API → Node.js Backend
  → PostgreSQL → WebSocket Server → Location Service
  → Matching Engine → Notification Service → User
```

Built for scalability from the start: stateless backend, WebSockets, background workers, PostgreSQL indexing, connection-graph caching, and a modular service architecture.

## Business model (in mind for the future)

Premium networking features, enterprise workplace networking, university partnerships, conference organizer tools, event analytics, and recruitment integrations — the privacy-first, consent-based re-connection model has real monetization paths beyond just being a cool idea.

## Roadmap / future features

AI-powered networking recommendations, calendar integration, LinkedIn import, Apple Wallet event passes, BLE-based indoor proximity, smart wearable integration, business card scanning, voice introductions, AI-generated conversation starters, a "professional networking score," team/campus/company modes.

## Status

MVP under active development — core architecture is being implemented, mobile app is in progress, and features are being added and validated iteratively. This is a long-term project I'm building properly, not rushing.
