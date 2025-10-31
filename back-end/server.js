const express = require('express');
const cors = require('cors');
const projects = require('./projects.json');

const app = express();
app.use(cors());
app.use(express.json());

// API route to get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Optional: get a single project by id
app.get('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
