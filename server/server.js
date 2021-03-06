const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');

//middleware
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Server is listening');
});