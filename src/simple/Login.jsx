import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const simplePassword = localStorage.getItem("SIMPLE_PASSWORD");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CRM Task - Login"
    localStorage.setItem("SIMPLE_PASSWORD", "password");
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    if (fullName.length > 0 && password === simplePassword) {
      navigate("/dashboard/users");
      localStorage.setItem("SIMPLE_NAME", fullName)
      localStorage.setItem("IS_SIMPLE", true)
      localStorage.setItem("IS_ADMIN", false)
      localStorage.setItem("IS_SUPER_ADMIN", false)
      setIsLoading(false)
      setIsError(false)
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  };

  return (
    <div className="center-mode h-[100vh]" data-aos="zoom-in">
      <div className="flex flex-col gap-[15px] w-[400px]">
        <h1 className="text-center text-2xl uppercase bold text-neutral-100">
          Log In
        </h1>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input"
          placeholder="Full Name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Password"
        />
        {isError ? <p className="text-center text-red-600">Something went wrong!</p> : ""}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-600 h-[60px] rounded-lg text-neutral-100 uppercase hover:bg-orange-700 transition"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <Link to={"/register"} className="text-center text-neutral-500">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;