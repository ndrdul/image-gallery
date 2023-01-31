import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="relative bg-center bg-cover" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/11/11/21/35/3d-model-2940610_960_720.jpg')` }}>
      <div className="container mx-auto p-6  max-w-150 bg-gray-700 " style={{ opacity: 0.7 }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
