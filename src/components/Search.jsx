import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="md:flex justify-end hidden">
      <div className="bg-gray-100 rounded-full p-2 items-center mr-2 flex ">
        <MagnifyingGlassIcon className="h-6" />
        <input
          type="text"
          placeholder="Search Flight.."
          className="bg-transparent focus:outline-none flex ml-2 items-center"
        />
      </div>
    </div>
  );
};

export default Search;
