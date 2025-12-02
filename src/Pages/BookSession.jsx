import React from 'react';
import MyContainer from '../Components/MyContainer';
import { toast } from "react-toastify";

const BookSession = () => {

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email);
    toast.success("Session booked successfully!");
    form.reset();
  };

  return (
    <MyContainer className="flex flex-col justify-center items-center mb-10 mt-10 px-4">

      <h1 className="text-2xl md:text-3xl text-pink-700 font-bold mb-6 text-center">
        Book Your Session
      </h1>

      <div className="card bg-base-100 w-full max-w-sm md:max-w-md shadow-2xl p-6 rounded-2xl">

        <form onSubmit={handleSubmitForm} className="space-y-4">

          <div>
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full card-btn p-2 mt-2"
          >
            Book Now
          </button>

        </form>
      </div>

    </MyContainer>
  );
};

export default BookSession;
