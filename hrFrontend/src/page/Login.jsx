import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../assets/odoo_logo.png'


const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let error = {};

    if (!formData.loginId.trim()) {
      error.loginId = "Login ID is required";
    }

    if (!formData.password.trim()) {
      error.password = "Password is required";
    } else if (formData.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Login Data");
    console.log(formData);

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl p-8">

        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className=" h-16 object-cover rounded-md"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Sign In
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">

          {/* Login ID */}

          <div>
            <label className="block text-gray-300 mb-2">
              Login ID / Email
            </label>

            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={changeHandler}
              placeholder="Enter Login ID"
              className="w-full bg-zinc-800 text-white rounded-lg px-4 py-2 outline-none border border-zinc-700 focus:border-purple-500"
            />

            {errors.loginId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.loginId}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="relative">
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className="w-full bg-zinc-800 text-white rounded-lg px-4 py-2 outline-none border border-zinc-700 focus:border-purple-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-400 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-lg font-semibold"
          >
            SIGN IN
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-400 cursor-pointer hover:underline ml-2"
          >
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;