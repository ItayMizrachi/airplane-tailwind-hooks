import { Link } from "react-router-dom";
import Search from "./Search";
import { Bars3Icon } from "@heroicons/react/24/solid";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const HeaderGrid = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header className="grid grid-cols-2 md:grid-cols-3 items-center max-w-[1260px]  mx-auto">
      {/* left */}
      <div className="md:w-48 w-44 relative">
        <img
          src="images/logo.jpg"
          alt="logo"
          className=" w-full h-full object-contain"
        />
      </div>
      {/* middle */}
      <div className="md:flex justify-center hidden">
        <ul className="flex space-x-5 font-semibold">
          <Link to="/" className="nav-btn">
            Home
          </Link>
          <Link to="/posts" className="nav-btn">
            Posts
          </Link>
          <Link to="/users" className="nav-btn">
            Users
          </Link>
          <Link to="/todos" className="nav-btn">
            Todos
          </Link>
          <Link to="/gallery" className="nav-btn">
            Gallery
          </Link>
        </ul>
      </div>
      {/* right */}
      <Search />
      <div className="flex justify-end md:hidden">
        <Bars3Icon
          onClick={() => setBurger(!burger)}
          className="w-8 h-8 mr-2 nav-btn hover:text-black"
        />
      </div>
      {burger && <HeaderMenu />}
    </header>
  );
};

export default HeaderGrid;
