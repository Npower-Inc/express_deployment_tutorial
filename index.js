require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! and checkout the /api/data endpoint');
});

app.get('/api/data', (req, res) => {
    const environmentUser = process.env.USER || 'Default User';
    const isDefaultUser = environmentUser === 'Default User';
    const userMessage = isDefaultUser ? `${environmentUser} please change the USER environment variable` : environmentUser;
    const message = `Welcome to the API, ${userMessage}!`;
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];
    res.json({ message, data });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});