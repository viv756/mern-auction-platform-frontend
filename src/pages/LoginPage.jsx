import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setLoginSuccesFalse } from "@/store/slices/authSlice";
import H1 from "@/components/H1";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, successLogin } = useSelector((state) => state.auth);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (successLogin) {
      navigateTo("/");
      dispatch(setLoginSuccesFalse());
    }
  }, [successLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div className="bg-boxcolor mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] ">
          <H1 className="mt-8">Login</H1>
          <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full sm:p-10 p-3">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <button
              className="bg-primary font-semibold hover:bg-accent transition-all duration-300 text-xl py-2 px-4 rounded-md text-white my-7 w-full "
              type="submit">
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
