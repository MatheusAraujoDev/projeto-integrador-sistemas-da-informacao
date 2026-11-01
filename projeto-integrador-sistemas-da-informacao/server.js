const express = require('express');
const path = require('path');
const controller = require('./controllers/cupcakeController');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controller.renderLandingPage);
app.get('/api/cupcakes', controller.getCupcakes);

// Run local server if not on Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;