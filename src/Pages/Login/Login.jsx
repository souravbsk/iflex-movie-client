import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result);
        })
    }
  return (
    <div className=" mx-auto lg:w-4/12 md:w-6/12 w-full px-5 rounded-2xl bg-[#0B0F29]">
      <div className=" py-6 flex justify-center px-6 ">
        <button onClick={handleGoogleSignIn} className=" px-5 py-3 font-semibold rounded-full text-[#0B0F29] bg-white flex items-center gap-2 text-xl">
          {" "}
          <FaGoogle></FaGoogle> Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
