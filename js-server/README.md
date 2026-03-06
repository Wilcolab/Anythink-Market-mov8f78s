# JS Express Server

A simple Express.js server running on port 8001 with hot reload support via nodemon.

## Overview

This is a minimal Express server setup with:
- **Port:** 8001
- **Hot Reload:** Nodemon for automatic restarts on code changes
- **Containerized:** Docker support for easy deployment
- **No Endpoints:** Ready to add your own routes

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server with hot reload:
```bash
yarn start
```

The server will start on `http://localhost:8001` and automatically reload on file changes.

### Production

Run the server without nodemon:
```bash
npm run prod
```

## Docker

### Build the image:
```bash
docker build -t js-server .
```

### Run the container:
```bash
docker run -p 8001:8001 js-server
```

### Using Docker Compose

Run alongside the Python server:
```bash
docker-compose up
```

This will start both the Python server (port 8000) and JS server (port 8001) with hot reload enabled.

## Project Structure

```
js-server/
├── src/
│   └── index.js        # Main server file
├── Dockerfile          # Container configuration
├── package.json        # Dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md          # This file
```

## Available Scripts

- `npm run start` or `yarn start` — Start dev server with nodemon
- `npm run dev` — Alias for start
- `npm run prod` — Start production server

## Environment Variables

- `PORT` — Server port (default: 8001)

## License

ISC
