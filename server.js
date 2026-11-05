const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AgriShare Backend Running!");
});

app.get("/equipment", (req, res) => {
    res.json([
        { name: "Tractor", price: 1000 },
        { name: "Harvester", price: 2000 },
        { name: "Seed Drill", price: 800 }
    ]);
});

app.post("/booking", (req, res) => {
    const b = req.body;

    db.run(
        `INSERT INTO bookings
        (farmer, phone, equipment, location, days, total, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [b.farmer, b.phone, b.equipment, b.location,
         b.days, b.total, b.status],
        function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                message: "Booking saved in database!",
                id: this.lastID
            });
        }
    );
});

app.get("/bookings", (req, res) => {
    db.all("SELECT * FROM bookings", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("AgriShare running on port 3000");
});