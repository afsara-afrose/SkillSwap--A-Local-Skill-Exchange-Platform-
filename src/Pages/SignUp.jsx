import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firrebase.config";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";


const provider = new GoogleAuthProvider();

const SignUp = () => {
  const {createUser,updateUser}=use (AuthContext)
  const [showPass, setShowPass] = useState(false);

  const navigate=useNavigate()
    const from = location.state?.from?.pathname || "/";
  const handleRegister = (e) => {
    e.preventDefault();
    const form=e.target;
    const displayName=form.displayName.value;
    const email=form.email.value;
    const photoURL=form.photoURL.value;
    const password=form.password.value;
   

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

    createUser(email,password)
    .then(res=>{
      console.log(res)
      toast.success('Sign Up Successful')

       // update profile
        updateUser(displayName, photoURL)
          .then(() => {
            toast.success("Profile updated");
            navigate(from)
          })
          .catch(() => 
            toast.error('profile is not updated yeat'));
      })
    .catch(error=>{
      console.log(error)
      toast.error(error.message)
    })

  };
   // google sign in
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
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register For Create account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="displayName"
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Photo-Url */}
            <label className="label">Photo-URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo-Url"
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
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FcGoogle /> Login with Google
          </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                SignIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
