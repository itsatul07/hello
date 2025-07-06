import React, { useState } from "react";
import PropTypes from "prop-types";

const ProfileCard = ({ user }) => {
  const [localUser, setLocalUser] = useState(user);
  const [originalUser] = useState(user); // Read-only copy
  const isChanged = JSON.stringify(user) !== JSON.stringify(localUser);
  console.log(localUser);
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(localUser),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully!");
        setIsEditing(false);
        setIsEditingAddress(false);
        // Optional: update parent state if needed
      } else {
        alert(data.message || "Failed to update profile.");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating profile.");
    }
  };
  
  const handleEdit = (field, value) => {
    setLocalUser(prev => ({ ...prev, [field]: value }));
  };
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                handleEdit("profilePicture", URL.createObjectURL(file));
              }
            }}
          />
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={
              localUser.profilePicture ||
              "https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg"
            }
            alt="profile"
          />
          <label htmlFor="photo-upload">
            <span
              className="absolute bottom-0 right-0 block h-5 w-5 rounded-full ring-2 ring-white bg-green-600 flex items-center justify-center text-white text-xs cursor-pointer"
              title="Change profile pic"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-3"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536M16.5 4.5a2.121 2.121 0 113 3L7 20.5H4v-3L16.5 4.5z"
                />
              </svg>
            </span>
          </label>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-900">{user.name}</h2>
          <p className="text-gray-700 text-sm">{user.role}</p>
          <p className="text-gray-600 text-sm">{user.residentialAddress}</p>
        </div>
      </div>

      <section className="bg-white rounded-xl p-6 shadow space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-green-900 font-semibold">Personal Information</h3>
          <button
            type="button"
            onClick={() => {
              if (isEditing) {
                // Cancel clicked — reset values
                setLocalUser(originalUser);
              }
              setIsEditing(!isEditing);
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-4 py-1 rounded flex items-center space-x-1"
            aria-label="Edit personal information"
          >
            <span>{isEditing ? "Cancel" : "Edit"}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4h2M12 9v10m-7-7h14"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Name</p>
            {isEditing ? (
              <input
                type="text"
                className="w-full text-gray-800 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.name}
                onChange={(e) => handleEdit("name", e.target.value)}
                aria-label="Edit name"
              />
            ) : (
              <p className="text-gray-800">{localUser.name}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">Email Address</p>
            {isEditing ? (
              <input
                type="email"
                className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.email}
                onChange={(e) => handleEdit("email", e.target.value)}
                aria-label="Edit email"
              />
            ) : (
              <p className="text-gray-600">{localUser.email}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">Date of Birth</p>
            {isEditing ? (
              <input
                type="date"
                className="w-full text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.dob?.split("T")[0] || ""}
                onChange={(e) => handleEdit("dob", e.target.value)}
                aria-label="Edit date of birth"
              />
            ) : (
              
              <p className="text-gray-900">{localUser.dob?.split("T")[0] || ""}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">Phone Number</p>
            {isEditing ? (
              <input
                type="number"
                inputMode="numeric"
                className="w-full text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.contact}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 10) {
                    handleEdit("contact", e.target.value);
                  }
                }}
                aria-label="Edit contact"
              />
            ) : (
              <p className="text-gray-700">{localUser.contact}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">User Role</p>
            {isEditing ? (
              <input
                type="text"
                className="w-full text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.role}
                onChange={(e) => handleEdit("role", e.target.value)}
                aria-label="Edit role"
              />
            ) : (
              <p className="text-gray-700">{localUser.role}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">Profession</p>
            {isEditing ? (
              <input
                type="text"
                className="w-full text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={localUser.profession || ""}
                onChange={(e) => handleEdit("profession", e.target.value)}
                aria-label="Edit profession"
              />
            ) : (
              <p className="text-gray-700">{localUser.profession}</p>
            )}
          </div>
        </div>
      </section>

      {/* Address Section */}

      <section className="bg-white rounded-xl p-6 shadow space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-green-900 font-semibold">Address</h3>
          <button
            type="button"
            onClick={() => setIsEditingAddress(!isEditingAddress)}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-4 py-1 rounded flex items-center space-x-1"
            aria-label="Edit address"
          >
            <span>{isEditingAddress ? "Cancel" : "Edit"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4h2M12 9v10m-7-7h14"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm text-gray-700">
          {isEditingAddress ? (
            <input
              type="text"
              className="w-full text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              value={localUser.residentialAddress}
              onChange={(e) => handleEdit("residentialAddress", e.target.value)}
              aria-label="Edit address"
            />
          ) : (
            <p className="text-gray-900">{localUser.residentialAddress}</p>
          )}
        </div>
      </section>
      {isChanged && (isEditing || isEditingAddress) && (
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-2 rounded shadow"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string,
    contact: PropTypes.string,
    role: PropTypes.string,
    profession: PropTypes.string,
    residentialAddress: PropTypes.string,
    profilePicture: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;




