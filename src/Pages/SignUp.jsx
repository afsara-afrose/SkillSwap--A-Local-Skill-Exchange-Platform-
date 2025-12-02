import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firrebase.config";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const provider = new GoogleAuthProvider();

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain uppercase & lowercase letters");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res)
        toast.success("Sign Up Successful");
        updateUser(displayName, photoURL)
          .then(() => {
            toast.success("Profile updated");
            navigate(from);
          })
          .catch(() => toast.error("Profile is not updated yet"));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else {
          toast.error(error.message);
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-In Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-2xl py-5 px-4 md:px-6">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Register to Create Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              name="displayName"
              type="text"
              className="input w-full"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="input w-full rounded"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-10 md:top-12 cursor-pointer text-xl"
            >
              {showPass ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          {/* Buttons */}
          <button type="submit" className="w-full my-btn p-2 mt-4">
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn mt-3 w-full flex justify-center items-center gap-2 bg-white text-black border-[#e5e5e5] rounded-full hover:scale-105 transition"
          >
            <FcGoogle />
            Sign Up with Google
          </button>

          <p className="font-semibold text-center pt-5 text-sm md:text-base">
            Already have an account?{" "}
            <Link className="text-secondary" to="/auth/login">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
