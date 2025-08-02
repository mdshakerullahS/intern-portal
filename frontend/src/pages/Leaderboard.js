import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🏆 Leaderboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>${entry.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Leaderboard;
