import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const LoginUserAvatar = () => {
    const { logOut } = useContext(AuthContext);
  const user = useSelector((store) => store?.auth?.user);
  console.log(user);

  const handleLogOut = () => {
    logOut()
  };

  return (
    <>
      {user ? (
        <li className="relative group">
          <img
            width={35}
            height={35}
            className="w-[35] rounded-full h-[35]"
            src={user?.photoURL}
            alt=""
          />

          <button
            onClick={handleLogOut}
            className="btn group-hover:block hidden btn-xs lg:bottom-0 lg:top-12 lg:left-0 right-2 bottom-8 absolute w-20"
          >
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <Link
            className="hover:text-subMain transitions text-white"
            to="/login"
          >
            <FaRegUser size={25}></FaRegUser>
          </Link>
        </li>
      )}
    </>
  );
};

export default LoginUserAvatar;
