import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Intern Dashboard</h2>
      {user ? (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Referral Code:</strong> {user.referralCode}
          </p>
          <p>
            <strong>Total Donations:</strong> ${user.donations}
          </p>
          <h3>🎁 Rewards</h3>
          <ul>
            <li>💡 Unlock T-Shirt at $1000</li>
            <li>🎒 Unlock Bag at $3000</li>
            <li>🧥 Unlock Hoodie at $5000</li>
          </ul>
          <br />
          <Link to="/leaderboard">View Leaderboard</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
