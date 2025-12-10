import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("Message sent successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setIsError(true);
      setStatus("Error sending message. Please try again later.");
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Reach out about collaboration, projects, or opportunities.
        </p>
      </header>

      <div className="card">
        {status && (
          <p className={`status ${isError ? "status-error" : ""}`}>{status}</p>
        )}

        <p
          style={{
            marginBottom: "1.25rem",
            fontSize: "0.95rem",
            color: "#9ca3af",
          }}
        >
          <span style={{ display: "block" }}>
            <strong>Email:</strong> saqibtaha820@gmail.com
          </span>
          <span style={{ display: "block" }}>
            <strong>Phone:</strong> (437) 450-3450
          </span>
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            className="textarea"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
