import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const{PassReset}=useContext(AuthContext)
  const[loading,setLoading]=useState(false)

  // Pre-fill email if provided
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  if (loading) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <RingLoader size={50} color="#36d7b7" />
        </div>
      );
    }

  const handleReset = () => {
     if (!email) {
      alert("Please enter your email");
      return;
    }

    PassReset(email)
      .then(() => {
        setLoading(false);
        alert("Password reset email sent! Redirecting to Gmail...");
        window.location.href = "https://mail.google.com"; 
      })
      .catch((err) => alert(err.message));
  };
   
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5 p-6">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Reset Your Password
        </h2>
        <div className="flex flex-col gap-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleReset}
            className="btn btn-neutral mt-4"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
