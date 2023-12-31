
import  { useState } from "react";


function Login() {
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

        const data = await response.json();
      console.log(data)
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
      
      <div className="flex flex-col items-center  gap-5 mt-16">
        <h2 className="text-center text-3xl font -bold">Login Your Account</h2>
        <input
          className="border border-black rounded-lg p-2 w-1/3 mx-auto"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-black rounded-lg p-2 w-1/3 mx-auto"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-24 mx-auto border px-3 py-1 rounded-lg bg-sky-400"
        >
          Login
        </button>
      </div>
  );
}

export default Login;
