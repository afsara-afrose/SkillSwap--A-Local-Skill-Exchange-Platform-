import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firrebase.config";
import { RingLoader } from "react-spinners";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const provider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, PassReset } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <RingLoader size={50} color="#36d7b7" />
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res)
        toast.success("Successfully signed in");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast.error("Please enter your email to reset password");
      return;
    }
    PassReset(email)
      .then(() => {
        toast.success("Check your email to reset password");
        navigate("/auth/forget-password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-In Successful");
        navigate(from);
      })
      .catch(() => {
        toast.error("Google Sign-In Failed");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-2xl py-5 px-4 md:px-6">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
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

          {/* Forgot password */}
          <div className="text-left">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="link link-hover text-sm md:text-base hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login button */}
          <button type="submit" className="w-full my-btn p-2 mt-2">
            Login
          </button>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn mt-3 w-full flex justify-center items-center gap-2 bg-white text-black border-[#e5e5e5] rounded-full hover:scale-105 transition"
          >
            <FcGoogle />
            Login with Google
          </button>

          {/* Signup link */}
          <p className="font-semibold text-center pt-5 text-sm md:text-base">
            Don’t Have An Account?{" "}
            <Link className="text-secondary" to="/auth/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
