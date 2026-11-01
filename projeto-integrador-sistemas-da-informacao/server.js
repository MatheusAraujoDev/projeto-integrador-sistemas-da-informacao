const express = require('express');
const path = require('path');
const controller = require('./controllers/cupcakeController');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', controller.renderLandingPage);
app.get('/api/cupcakes', controller.getCupcakes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
