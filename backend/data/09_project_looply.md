# Looply — Goal Setting & Tracking Portal (AtomQuest Hackathon 1.0, 2026)

## Why I'm especially proud of this one

This is one of the two projects I'm proudest of (alongside Mysterio/Redrob). Looply isn't just a UI on top of a spreadsheet — it enforces real business rules (100% weightage validation, goal locking, full audit trails) at both the client and server layer, across three distinct roles. Building something that could realistically replace a real organization's OKR process, end to end, in a hackathon timeframe, is what makes this one stand out to me.

## Links
- **Live Demo:** https://looply-fsc.vercel.app/dashboard
- **GitHub:** https://github.com/aditya-singh2005/Looply
- **Architecture Diagram:** https://gitdiagram.com/aditya-singh2005/Looply

> Tip for anyone checking out the live demo: use the Role Switcher chip in the top-right corner to instantly switch between Employee, Manager, and Admin views — no separate logins needed.

## The problem

Organizations relying on spreadsheets and emails for goal tracking run into three consistent failures: no real-time visibility for managers, unclear alignment between day-to-day work and organizational priorities, and audit gaps when HR tries to reconstruct history at appraisal time.

## What Looply does

A structured, role-gated, fully audit-logged goal lifecycle: **Create → Submit → Approve → Track → Check-in → Report.**

### Core features
- Multi-step Goal Wizard (Thrust Area → Title/Description → Unit-of-Measure type → Target → Weightage) with a live weightage allocation bar
- Validation enforced at both client and server: total weightage must equal 100%, minimum 10% per goal, max 8 goals per employee per cycle
- Manager approval workflow with inline editing, Approve or Return-for-Rework with comments
- Goal locking — approved goals become immutable (`locked_at` timestamp), no edits without Admin intervention
- Shared/departmental goals that sync achievement updates across all linked employee sheets
- Quarterly achievement check-ins with auto-computed progress scores
- A Time-Travel Widget for demoing/testing quarterly window logic without waiting for the actual calendar quarter
- Full audit trail — every post-lock change and approval logged with user ID, goal ID, action type, and JSON diffs
- CSV export of Planned vs. Actual achievement reports (client-side via PapaParse)

### Scoring engine
Four unit-of-measure types, each with its own formula (e.g. Numeric Min = higher is better, Numeric Max = lower is better, Timeline = on-time completion with a daily late penalty, Zero = binary success/failure), all capped at 100%.

## Tech stack

Next.js 14 (App Router), TypeScript 5, shadcn/ui + Tailwind CSS, react-hook-form + Zod, Supabase (PostgreSQL with Row-Level Security), Supabase SSR auth, Recharts, PapaParse, hosted on Vercel.

## Why I built it this way

I wanted the whole system to be role-gated and time-windowed at both the client and server layer — not just a nice UI on top of a spreadsheet, but something that actually enforces the business rules (100% weightage, goal locking, audit trails) so it could realistically replace a real organization's OKR process.
