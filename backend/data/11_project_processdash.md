# ProcessDash — OS Process Scheduler Simulator

## Links
- **GitHub:** https://github.com/aditya-singh2005/ProcessDash
- No hosted live demo — it's a static site, run by opening `index.html` directly in a browser.

## What it is

A visualization and comparison tool for CPU scheduling algorithms, built as a way to make Operating Systems concepts tangible rather than just theoretical.

## Supported algorithms (7 total)

- First Come First Serve (FCFS) — Non-Preemptive
- Shortest Job First (SJF) — Non-Preemptive
- Shortest Remaining Time First (SRTF) — Preemptive
- Longest Job First (LJF) — Non-Preemptive
- Longest Remaining Time First (LRTF) — Preemptive
- Priority Scheduling — Non-Preemptive
- Round Robin (RR) — Preemptive
- Highest Response Ratio Next (HRRN) — Non-Preemptive

## Features

- Interactive process management (add/remove processes on the fly)
- Gantt chart visualization for each algorithm
- Performance comparison across algorithms — average waiting time, turnaround time, and more
- Clean, simple UI focused on clarity over flash

## Tech stack

Vanilla JavaScript, HTML, CSS — no framework overhead, built to run directly in the browser.

## Why this project matters to me

This is the project I go deepest on when discussing OS fundamentals — I implemented all the classic scheduling algorithms from scratch, not just called a library, so I can walk through the trade-offs of each (e.g. why SRTF minimizes average waiting time but can starve long processes, or how HRRN balances that).
