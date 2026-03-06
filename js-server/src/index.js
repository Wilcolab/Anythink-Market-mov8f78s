const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());

// Tasks data store
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
