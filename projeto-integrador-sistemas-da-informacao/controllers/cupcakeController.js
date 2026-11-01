const cupcakeModel = require('../models/cupcakeModel');
const path = require('path');

const renderLandingPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

const getCupcakes = (req, res) => {
  cupcakeModel.getAllCupcakes((err, cupcakes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(cupcakes);
  });
};

module.exports = { renderLandingPage, getCupcakes };
