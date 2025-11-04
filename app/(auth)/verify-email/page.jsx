"use client"; // ← this makes the page a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // use next/navigation instead of next/router

export default function VerifyEmail() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying your email...");

  useEffect(() => {
    // Get token from URL
    const queryToken = new URLSearchParams(window.location.search).get("token");
    if (!queryToken) return;

    fetch("http://127.0.0.1:8000/api/email/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${queryToken}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Verification failed");
        const data = await res.json();
        setStatus(data.message || "Email verified successfully!");
      })
      .catch(() => setStatus("Verification failed. Please try again."));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Email Verification</h1>
      <p>{status}</p>
      {status.includes("success") && (
        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      )}
    </div>
  );
}
