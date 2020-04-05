const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(`Server running`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
