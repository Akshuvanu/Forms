# Forms
# SlidelyFormAppBackend

This repository contains the backend server for SlidelyFormApp.
This repository contains a TypeScript-based Express server that provides endpoints for managing form submissions.


### Getting Started

1. **Clone this repository**
   git clone https://github.com/Akshuvanu/Forms.git
   cd Forms
   

2.**Install dependencies**
  npm install


3. **start the server**
 
    npm start



### Server Endpoints
1./ping: GET request to check server status

2./submit: POST request to save form submissions with parameters (name, email, phone, github_link, stopwatch_time)

3./read: GET request with a query parameter (index) to retrieve specific form submissions.)

# File Structure
routes/index.ts: The main routing file that ties all specific route handlers together.
routes/ping.ts: Handles the /ping endpoint.
routes/submit.ts: Handles the /submit endpoint for form submissions.
routes/read.ts: Handles the /read endpoint for retrieving specific submissions.
server.ts: Configures the Express app, sets up middleware, and starts the server, integrating all the defined routes.

## Database
src/db.json: JSON file used as a database to store form submissions

## Development
TypeScript: The project uses TypeScript for type safety and modern JavaScript features
Express: Minimal and flexible Node.js web application framework
JSON Database: Uses db.json to store form submissions locally.
