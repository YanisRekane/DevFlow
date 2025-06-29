const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');
const refreshTokenRoute = require('./routes/refreshTokenRoute')


app.use(express.json());
app.use('/auth', userRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/refreshtoken', refreshTokenRoute);

app.get('/', (req, res) => {
  res.send('Hello World with Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});