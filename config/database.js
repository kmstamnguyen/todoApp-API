// config/database.js

const USERNAME = 'admin';
const PASS = 'admin123';
const dbUrl = `mongodb+srv://${USERNAME}:${PASS}@cluster0.673zi.mongodb.net/chatApp?retryWrites=true&w=majority`;


module.exports = {
    url : dbUrl,
};