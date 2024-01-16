import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const Search: React.FC<SearchProps> = ({ setSearch, search }) => {
  const [state, setState] = useState<string>("");
  const debounced = useDebouncedCallback(value => {
    setSearch(value);
  }, 200);
  const handleChange = (e: any) => {
    debounced(e.target.value);
    setState(e.target.value);
  };
  return (
    <div className="text-[14px] lg:py-10 md:pt-9 md:pb-10 sm:pt-8 sm:pb-10  pt-6 pb-8 flex flex-row items-center justify-center">
      <input
        type="text"
        className="py-[8px] pl-[20px] pr-[36px]  rounded-full outline-none w-[300px] md:w-[340px]  shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] text-primary focus:bg-[#474550]"
        onChange={handleChange}
        value={state}
        placeholder={`Search movies`}
      />
      <div className="text-[18px] -ml-[32px] text-[#ff0000] z-[1]">
        <GoSearch />
      </div>
    </div>
  );
};

export default Search;
