import { useState } from "react";
import API from "../axiosConfig.js";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
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
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* your form inputs */}</form>;
}

export default Register;
