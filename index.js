const express = require('express');  // Import expresse
const app = express() // creer le server


app.get('/', (req, res) => {
    res.send('Hello, DevOPs');
});

const port = process.env.PORT || 300;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(`Server listening on port ${port}`);

});