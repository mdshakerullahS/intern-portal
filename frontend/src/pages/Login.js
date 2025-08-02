import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Intern Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Name" required />
        <br />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
