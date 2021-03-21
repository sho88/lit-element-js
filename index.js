const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public_html'));

app.listen(PORT, () => console.log('Listening in PORT:', PORT));
