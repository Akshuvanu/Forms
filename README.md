# Forms
# SlidelyFormAppBackend

This repository contains the backend server for SlidelyFormApp.
This repository contains a TypeScript-based Express server that provides endpoints for managing form submissions.

### Prerequisites

- Node.js installed (https://nodejs.org/)
- npm package manager

### Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/SlidelyFormAppBackend.git
   cd SlidelyFormAppBackend
2 install dependencies
     npm install
3. start the server
    npm start

Server Endpoints
/ping: GET request to check server status.
/submit: POST request to save form submissions with parameters (name, email, phone, github_link, stopwatch_time).
/read: GET request with a query parameter (index) to retrieve specific form submissions.)

File Structure
src/: Contains all TypeScript source files.
src/controllers/: Handles endpoint logic.
src/models/: Defines TypeScript interfaces for data structures.
src/routes/: Defines Express routes.
src/utils/: Contains utility functions, such as file handling.

Database
src/db.json: JSON file used as a database to store form submissions.

Development
TypeScript: The project uses TypeScript for type safety and modern JavaScript features.
Express: Minimal and flexible Node.js web application framework.
JSON Database: Uses db.json to store form submissions locally.
