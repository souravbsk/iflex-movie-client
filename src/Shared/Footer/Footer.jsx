import { FaHeart, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginUserAvatar from "../../components/LoginUserAvartar/LoginUserAvatar";
import FavoriteCount from "../../components/FavoriteCount/FavoriteCount";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#0B0F29] footer-center p-10 text-white rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by soravbsk</p>
        </div>
      </footer>

      <div className="lg:hidden bg-[#080A1A] fixed  z-50 bottom-0 w-full px-1">
        <div className=" container">
          <div className="bg-dry rounded-md flex justify-between items-center w-full p-1">
            <li>
              <Link
                className="transitions text-2xl flex-colo hover:text-black hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
                to="/"
              >
                <FaVideo size={20}></FaVideo>
              </Link>
            </li>
            <li>
              <Link
                className="transitions text-2xl flex-colo hover:text-black hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
                to="/favorites"
              >
                <div className="relative">
                  <div className="w-5 h-5 z-[99999] flex-colo hover:text-black rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                    <FavoriteCount></FavoriteCount>
                  </div>
                  <FaHeart className="" size={20}></FaHeart>
                </div>
              </Link>
            </li>
            <li>
              <button className="transitions text-2xl flex-colo hover:text-black hover:bg-white hover:text-main text-white rounded-md px-4 py-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01562 6.98193C7.46334 6.98193 7.01562 7.43285 7.01562 7.98513C7.01562 8.53742 7.46334 8.98833 8.01563 8.98833H15.9659C16.5182 8.98833 16.9659 8.53742 16.9659 7.98513C16.9659 7.43285 16.5182 6.98193 15.9659 6.98193H8.01562Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M7.01562 12C7.01562 11.4477 7.46334 10.9968 8.01562 10.9968H15.9659C16.5182 10.9968 16.9659 11.4477 16.9659 12C16.9659 12.5523 16.5182 13.0032 15.9659 13.0032H8.01563C7.46334 13.0032 7.01562 12.5523 7.01562 12Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8.0249 15.0122C7.47262 15.0122 7.0249 15.4631 7.0249 16.0154C7.0249 16.5677 7.47262 17.0186 8.0249 17.0186H15.9752C16.5275 17.0186 16.9752 16.5677 16.9752 16.0154C16.9752 15.4631 16.5275 15.0122 15.9752 15.0122H8.0249Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </li>
            <LoginUserAvatar></LoginUserAvatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
