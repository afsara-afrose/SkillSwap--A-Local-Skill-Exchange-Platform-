import React, { useContext, useState } from "react";
import MyContainer from "../Components/MyContainer";
import { AuthContext } from "../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.name.value;
    const newPhoto = form.photoURL.value;

    updateProfile(user, {
      displayName: newName,
      photoURL: newPhoto,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <MyContainer className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md md:max-w-lg bg-white shadow-2xl rounded-2xl p-6 md:p-8">

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/0f8Vf3K/default-avatar.png"}
            alt={user?.displayName}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-pink-500 object-cover"
          />

          <h2 className="text-xl md:text-2xl font-bold mt-4 text-gray-800 text-center">
            {user?.displayName}
          </h2>

          <p className="text-gray-600 mt-1 text-center">{user?.email}</p>
        </div>

        {/* Editing Form */}
        {isEditing ? (
          <form onSubmit={handleUpdate} className="mt-6 md:mt-8 space-y-4">

            <div>
              <label className="label font-semibold">Update Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label font-semibold">Update Photo URL</label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user?.photoURL}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button type="submit" className="btn btn-primary w-full">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-neutral w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* Profile Info */}
            <div className="mt-6 md:mt-8 space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border">
                <span className="font-semibold text-gray-700">Name</span>
                <span className="text-gray-800 break-all">{user?.displayName}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border">
                <span className="font-semibold text-gray-700">Email</span>
                <span className="text-gray-800 break-all">{user?.email}</span>
              </div>
            </div>

            {/* Update Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary w-full max-w-xs p-3 rounded-lg hover:bg-pink-600 transition"
              >
                Update Profile
              </button>
            </div>
          </>
        )}
      </div>
    </MyContainer>
  );
};

export default MyProfile;
