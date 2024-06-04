const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'/assets')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname,"user.html"));
})

app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname,"booking.html"));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname,"admin.html"));
})

app.get('/discover', (req, res) => {
    res.sendFile(path.join(__dirname,"discover.html"));
})

app.get('/explore', (req, res) => {
    res.sendFile(path.join(__dirname,"explore.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"login.html"));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,"signup.html"));
})

app.get('/tips', (req, res) => {
    res.sendFile(path.join(__dirname,"tips.html"));
})

app.get('/recom', (req, res) => {
    res.sendFile(path.join(__dirname,"recom.html"));
})




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})