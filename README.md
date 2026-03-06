# Anythink Market

This project contains both a Python FastAPI server and a Node.js Express server for managing a task list.

## Project Structure

The project has the following structure:

### Python Server (`python-server/`)
- `src/main.py`: FastAPI server implementation with task management routes
- `src/__init__.py`: Python package marker
- `requirements.txt`: Python dependencies (FastAPI, Uvicorn)
- `Dockerfile`: Docker configuration for the Python server

### Node.js Server (`js-server/`)
- `src/index.js`: Express.js server implementation with task management routes
- `package.json`: Node.js dependencies and scripts
- `Dockerfile`: Docker configuration for the Node.js server
- `README.md`: Detailed Node.js server documentation

### Root Files
- `docker-compose.yml`: Multi-container configuration for both servers

## Getting Started

### Run Both Servers with Docker Compose

Build and start both containers:

```shell
docker compose up
```

This will start:
- **Python Server**: Running on `http://localhost:8000`
- **Node.js Server**: Running on `http://localhost:8001`

Both servers include hot reload capabilities for development:
- Python: Uvicorn with auto-reload
- Node.js: Nodemon watching for file changes

## API Routes

Both servers provide identical API routes for managing tasks:

### GET `/`
Returns a welcome message: `"Hello World"`

### GET `/tasks`
Retrieves the current list of tasks.

**Response:**
```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

### POST `/tasks`
Adds a new task to the list.

**Request Body:**
```json
{
  "text": "Your task description"
}
```

**Response:**
```json
{
  "message": "Task added successfully"
}
```

## Development

For detailed instructions on developing with each server individually, see:
- Python: `python-server/` directory
- Node.js: `js-server/README.md`
