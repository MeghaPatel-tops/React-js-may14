import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase"

function Login() {
    const handleGoogleLogin = async()=>{
        try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in as:", user.displayName, user.email);
      alert(`Welcome ${user.displayName}!`);
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
    }
  return (
    <div>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login with Google</h2>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
    </div>
  )
}

export default Login