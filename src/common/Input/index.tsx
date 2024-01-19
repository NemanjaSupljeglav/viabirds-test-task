import React from "react";

interface SearchProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  className?: string;
  label?: string;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  value,
  className,
  label,
  placeholder
}) => {
  return (
    <div className={className}>
      <p className="text-[#d1d1d1] text-[13px]">{label}</p>
      <div className="text-[14px]  flex flex-row items-center justify-center">
        <input
          type="text"
          className="py-[8px] pl-[10px] pr-[36px]  rounded outline-none w-full  shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] text-primary focus:bg-[#474550]"
          onChange={e => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
