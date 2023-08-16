const express = require('express');
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const heroRoutes = require('./routes/heroRoutes')
const sessionRoutes = require('./routes/sessionRoutes')
const partyRoutes = require('./routes/partyRoutes')
const monsterRoutes = require("./routes/monsterRoutes")
const encounterRoutes = require("./routes/encounterRoutes")
const weaponRoutes = require('./routes/weaponRoutes')
const raceRoutes = require('./routes/raceRoutes')
const spellRoutes = require('./routes/spellRoutes')
const classRoutes = require('./routes/classRoutes')
const equipmentRoutes = require('./routes/equipmentRoutes')



const seed = require('./seeds/seeds')

// seed.seedUsers()

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/heroes', heroRoutes)
app.use('/api/session', sessionRoutes)
app.use('/api/party', partyRoutes)
app.use('/api/monsters', monsterRoutes)
app.use('/api/encounters', encounterRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/equipment', equipmentRoutes)
app.use('/api/races', raceRoutes)
app.use('/api/spells', spellRoutes)
app.use('/api/weapons', weaponRoutes)
app.use('/api/classes', classRoutes)


app.get("/", (req, res) => {
    res.json({ message: "Welcome to the nexus." });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});