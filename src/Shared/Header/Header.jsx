import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import LoginUserAvatar from "../../components/LoginUserAvartar/LoginUserAvatar";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../Redux/SearchSlice/SearchSlice";
import FavoriteCount from "../../components/FavoriteCount/FavoriteCount";
const Header = () => {
  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    e.preventDefault();
    const searchText = e.target.searchinput.value;
    dispatch(setSearchText(searchText));
    e.target.reset();
  };
  return (
    <div className="bg-[#080A1A] shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <h2 className="text-4xl font-semibold text-[#F20000] font-serif">
              I Flex
            </h2>
          </Link>
        </div>
        <div className="col-span-3">
          <form
            onSubmit={handleSearchText}
            className="w-full text-sm bg-dryGray rounded items-center flex "
          >
            <button
              type="submit"
              className="bg-[#F20000] w-12 flex items-center justify-center h-12 rounded text-white"
            >
              <FiSearch size={20}></FiSearch>
            </button>
            <input
              type="text"
              name="searchinput"
              placeholder="Search Movie Name from here"
              className="font-medium border border-white placeholder:text-border text-sm w-10/12 h-12 bg-whitesfsd border-none px-2 text-black"
            />
          </form>
        </div>
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <li>
            <Link className="hover:text-subMain transitions text-white" to="/">
              Movies
            </Link>
          </li>
          <li>
            <Link className="hover:text-subMain transitions text-white" to="/">
              About Us
            </Link>
          </li>
    

          <LoginUserAvatar></LoginUserAvatar>
          <li className="relative">
            <Link  to="/favorites">
              <FaHeart size={28}></FaHeart>
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-0 -right-1">
                <FavoriteCount></FavoriteCount>
              </div>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
