import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className=" relative md:hidden">
      <div className=" absolute top-8 right-0 z-10 min-w-52 bg-white min-h-[200px] p-3 border rounded-lg">
        <div className="bg-gray-200 rounded-full p-2 items-center flex flex-grow ">
          <MagnifyingGlassIcon className="h-6" />
          <input
            type="text"
            placeholder="Search Flight.."
            className="bg-transparent focus:outline-none flex ml-2 items-center"
          />
        </div>
        <ul className="p-2 ">
          <li className="res-btn">
            <Link to="/">Home</Link>
          </li>
          <li className="res-btn">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="res-btn">
            <Link to="/users">Users</Link>
          </li>
          <li className="res-btn">
            <Link to="/todos">Todos</Link>
          </li>
          <li className="res-btn">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
