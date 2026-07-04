import { useState } from "react";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../assets/odoo_logo.png'

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    logo: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let error = {};

    if (!formData.companyName.trim())
      error.companyName = "Company name is required";

    if (!formData.name.trim()) error.name = "Name is required";

    if (!formData.email.trim()) {
      error.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      error.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      error.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      error.phone = "Enter valid phone number";
    }

    if (!formData.password) {
      error.password = "Password is required";
    } else if (formData.password.length < 8) {
      error.password = "Minimum 8 characters";
    }

    if (!formData.confirmPassword) {
      error.confirmPassword = "Confirm password";
    } else if (formData.password !== formData.confirmPassword) {
      error.confirmPassword = "Password doesn't match";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const changeHandler = (e) => {
    const { name, value, files } = e.target;

    if (name === "logo") {
      setFormData({
        ...formData,
        logo: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Signup Data");

    console.log(formData);

    navigate("/login");
  };

return (
  <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-6">
    <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl p-6">

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src={logo}
          alt="Logo"
          className="h-12 object-contain"
        />
      </div>

      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Create Account
      </h2>

      <form onSubmit={submitHandler}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Company Name */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              onChange={changeHandler}
              className="w-full p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <p className="text-red-500 text-xs mt-1">
              {errors.companyName}
            </p>
          </div>

          {/* Upload Logo */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm flex items-center gap-2">
              <FaUpload />
              Company Logo
            </label>

            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={changeHandler}
              className="block w-full rounded-lg border border-zinc-700 bg-zinc-800 text-gray-300
              file:bg-purple-600 file:text-white file:border-0
              file:px-3 file:py-2 file:rounded-md
              file:mr-3 hover:file:bg-purple-700 text-sm"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Name
            </label>

            <input
              type="text"
              name="name"
              onChange={changeHandler}
              className="w-full p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <p className="text-red-500 text-xs mt-1">
              {errors.name}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              onChange={changeHandler}
              className="w-full p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              onChange={changeHandler}
              className="w-full p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <p className="text-red-500 text-xs mt-1">
              {errors.phone}
            </p>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-300 mb-1 text-sm">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              className="w-full p-2.5 pr-10 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <p className="text-red-500 text-xs mt-1">
              {errors.password}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="relative md:col-span-2">
            <label className="block text-gray-300 mb-1 text-sm">
              Confirm Password
            </label>

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              className="w-full p-2.5 pr-10 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-9 text-gray-400"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          </div>

        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-2.5 rounded-lg font-medium"
        >
          Sign Up
        </button>

      </form>

      <p className="text-center text-gray-400 mt-5 text-sm">
        Already have an account?
        <button
          onClick={() => navigate("/login")}
          className="ml-2 text-purple-400 hover:underline"
        >
          Sign In
        </button>
      </p>

    </div>
  </div>
);
};

export default SignupPage;