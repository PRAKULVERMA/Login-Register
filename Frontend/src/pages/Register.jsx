import { useState } from "react";
import API from "../../axiosConfig.js";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { name, email, password, role } = formData;
      const res = await API.post("/register", { name, email, password, role });
      alert(res.data.message || "Registered successfully");
      setFormData({ name: "", email: "", password: "", role: "Student" });
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-3 border rounded-3xl"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded-3xl"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded-3xl"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          className="w-full p-2 mb-3 border rounded-3xl"
        >
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white p-2 rounded-3xl ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
