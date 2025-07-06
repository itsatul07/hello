import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import ProfileCard from "../Components/ProfileCard";
import { Spin } from 'antd';
export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  // let user = localStorage.getItem("currentUser");
  // if(!user) {
  //   user = {
  //     name:"chutad",
  //     email:"chutad@gmail.com"
  //   }
  // }
  // Fetch user data
  useEffect(() => {
    fetch("http://localhost:8000/api/user/profile", {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
        setLoading(false); // even if failed, stop loading
      });
  }, []);



  //loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" tip="Loading profile..." />
      </div>
    );
  }
  //for guest account
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          User Not Logged In
        </div>

        <div className="w-full max-w-sm space-y-4">
          {/* <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login
          </button> */}

          {/* Optional button using Ant Design or your custom Button component */}
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<LoginOutlined />}
            color="black"
            onClick={() => navigate("/")}
            block
          >
            Log in
          </Button>
        </div>
      </div>
    );
  }
  // const handleEdit = (field, value) => {
  //   setUser(prev => ({ ...prev, [field]: value }));
  // };
  console.log(user);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 mt-15">
        <ProfileCard user={user} />
    </div>
  );
}