const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const dummyData = {
  name: "Shakerullah",
  referralCode: "shakerullah2025",
  donations: 4500,
};

const leaderboard = [
  { name: "Raju", donations: 5000 },
  { name: "Shakerullah", donations: 4500 },
  { name: "Salman", donations: 3000 },
];

app.get("/api/user", (req, res) => {
  res.json(dummyData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
