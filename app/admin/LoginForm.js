"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./admin.css";

export default function LoginForm() {
  const [email, setEmail] = useState("orlanogardens@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const d = await r.json();
      setLoading(false);
      if (!r.ok) {
        setError(d.error || "Login failed");
        return;
      }
      router.push("/admin/dashboard");
    } catch {
      setLoading(false);
      setError("Could not reach the server. Please try again.");
    }
  }

  return (
    <main className="admin-auth">
      <form className="admin-auth__card" onSubmit={submit}>
        <div className="admin-auth__brand">
          <img
            src="/assets/images/orlano-gardens-logo.png"
            alt=""
            className="admin-auth__logo"
          />
          <span>
            <span className="admin-auth__brand-name">ORLANO GARDENS</span>
            <span className="admin-auth__brand-tag">Admin Panel</span>
          </span>
        </div>

        <h1 className="admin-auth__title">Sign in</h1>
        <p className="admin-auth__subtitle">
          Secure administrator access to manage the website content.
        </p>

        <div className="admin-field">
          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="username"
            required
          />
        </div>

        <div className="admin-field">
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        {error && <p className="admin-error">{error}</p>}

        <button className="admin-btn" disabled={loading} type="submit">
          {loading ? "Signing in…" : "Login"}
        </button>

        <p className="admin-auth__footnote">
          Sessions expire automatically after 12 hours.
        </p>
      </form>
    </main>
  );
}
