import React from 'react'
import { useEffect } from 'react';
function FetchCookie() {
    useEffect(() => {
        fetch("http://localhost:8000/api/user/check-cookie", {
          method: "GET",
          credentials: "include", // ⭐ THIS IS MUST FOR COOKIES TO BE SENT
        })
          .then(res => res.json())
          .then(data => {
            console.log("✅ Cookie response:", data);
          })
          .catch(err => {
            console.error("❌ Cookie fetch error:", err);
          });
      }, []);
      
  return (
    <div className='mt-32'>
      <h1>cookiePage</h1>
    </div>
  )
}

export default FetchCookie
