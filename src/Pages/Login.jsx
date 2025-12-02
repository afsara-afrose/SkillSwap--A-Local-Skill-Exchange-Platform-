import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firrebase.config";
import { RingLoader } from "react-spinners";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const provider = new GoogleAuthProvider();

const Login = () => {
  const { signIn,PassReset } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef(null);
  console.log(emailRef);

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
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
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully signIn");
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      })
      .finally(() => setLoading(false)); 
     
  };

    const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    PassReset(email)
      .then((res) => {
        console.log(res)
        setLoading(false);
        toast.success("Check your email to reset password");
        navigate('/auth/forget-password')
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
      .catch((err) => {
        console.log(err);
        toast.error("Google Sign-In Failed");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input rounded-full"
                placeholder="Password"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-[28px] top-[30px] cursor-pointer text-xl"
              >
                {showPass ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div>
              <Link to='/auth/forget-password'
                type="button"
                onClick={handleForgetPassword}
                className="link link-hover hover-underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
            <button type="submit" className=" w-full my-btn p-2 mt-4">
              Login
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="btn mt-3 bg-white rounded-full text-black border-[#e5e5e5] hover:scale-105 transition"
            >
              <FcGoogle />
              Login with Google
            </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/signup">
                SignUp
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
