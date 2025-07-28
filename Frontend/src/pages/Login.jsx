import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../axiosConfig";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = formData;
      const res = await API.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to="/Register">Register</Link>
      <form onSubmit={handleSubmit}>{/* form inputs */}</form>
    </div>
  );
}

export default Login;
