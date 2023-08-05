import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    document.title = "CRM Task - Register";
  }, []);

  return (
    <div className="center-mode h-[100vh]" data-aos="zoom-in">
      <div className="flex flex-col gap-[15px] sm:w-[400px] w-full sm:px-10 p-3">
        <h1 className="text-center text-2xl uppercase bold text-neutral-100">
          Register
        </h1>
        <input
          type="text"
          value={fullName}
          disabled
          onChange={(e) => setFullName(e.target.value)}
          className="input disabled:opacity-75"
          placeholder="Full Name"
        />
        <input
          type="text"
          value={phone}
          disabled
          onChange={(e) => setPhone(e.target.value)}
          className="input disabled:opacity-75"
          placeholder="Phone Number"
        />
        <input
          type="password"
          value={password}
          disabled
          onChange={(e) => setPassword(e.target.value)}
          className="input disabled:opacity-75"
          placeholder="Password"
        />
        <button
          disabled
          className="w-full bg-orange-600 disabled:opacity-75 disabled:hover:bg-orange-600 h-[60px] rounded-lg text-neutral-100 uppercase hover:bg-orange-700 transition"
        >
          Submit
        </button>
        <Link to={"/login"} className="text-center text-neutral-500">
          Do you have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
