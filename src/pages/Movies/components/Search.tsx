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
  }, 300);
  const handleChange = (e: any) => {
    debounced(e.target.value);
    setState(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center  mx-3">
      <p className="text-[#d1d1d1] text-[13px]  w-[250px] md:w-[340px] ml-3">
        Search
      </p>
      <div className="text-[14px]  flex flex-row items-center justify-center">
        <input
          type="text"
          className="py-[8px] pl-[10px] pr-[36px]  rounded outline-none w-[250px] md:w-[340px]  shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] text-primary focus:bg-[#474550]"
          onChange={handleChange}
          value={state}
          placeholder={`Batman`}
        />
        <div className="text-[18px]  text-[#ff0000] z-[1] ml-[-30px]">
          <GoSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
