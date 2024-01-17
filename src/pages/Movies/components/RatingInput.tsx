import React from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

interface RatingProps {
  rangeFrom: number;
  setRangeFrom: React.Dispatch<React.SetStateAction<number>>;
  rangeTo: number;
  setRangeTo: React.Dispatch<React.SetStateAction<number>>;
}

const RatingInput: React.FC<RatingProps> = ({
  rangeFrom,
  setRangeFrom,
  rangeTo,
  setRangeTo
}) => {
  const handleRangeFromChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    console.log("value:", value, "rangeTo:", rangeTo, "rangeFrom:", rangeFrom);
    if (value >= 0 && value <= 10) {
      setRangeFrom(value);
    }
    if (value > rangeTo && value >= 0 && value <= 10) {
      setRangeTo(value);
    }
  };

  const handleRangeToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    console.log("value:", value, "rangeTo:", rangeFrom);
    if (value >= 0 && value <= 10) {
      setRangeTo(value);
    }
    if (value < rangeFrom && value >= 0 && value <= 10) {
      setRangeFrom(value);
    }
  };
  const handlePressRangeFrom = (pressUp: boolean) => {
    let value = pressUp ? rangeFrom + 1 : rangeFrom - 1;
    if (value >= 0 && value <= 10) {
      setRangeFrom(value);
    }
    if (value > rangeTo && value >= 0 && value <= 10) {
      setRangeTo(value);
    }
  };
  const handlePressRangeTo = (pressUp: boolean) => {
    let value = pressUp ? rangeTo + 1 : rangeTo - 1;
    if (value >= 0 && value <= 10) {
      setRangeTo(value);
    }
    if (value < rangeFrom && value >= 0 && value <= 10) {
      setRangeFrom(value);
    }
  };
  return (
    <div className="mx-3">
      <p className="text-[#d1d1d1] text-[13px]">Rating (0-10)</p>
      <div className="text-[14px] flex flex-row items-center  ">
        <div className="flex items-center">
          <input
            className="py-[8px] pl-[10px] rounded outline-none w-[80px] md:w-[100px]  shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] text-primary focus:bg-[#474550]"
            onChange={handleRangeFromChange}
            value={rangeFrom}
            placeholder="0"
            max={rangeTo}
          />
          <div className="flex flex-col ml-[-20px] mt-1">
            <div
              className="text-[14px]  text-[#ff0000] h-[15px]   rounded-full cursor-pointer"
              onClick={() => handlePressRangeFrom(true)}
            >
              <GoChevronUp />
            </div>
            <div
              className="text-[14px]  text-[#ff0000] h-[15px]   rounded-full cursor-pointer"
              onClick={() => handlePressRangeFrom(false)}
            >
              <GoChevronDown />
            </div>
          </div>
        </div>

        <p className="text-lightGray mr-3 ml-5 text-[#d1d1d1] font-[13px]">
          to
        </p>

        <div className="flex items-center">
          <input
            className="py-[8px] pl-[10px] rounded outline-none w-[80px] md:w-[100px]  shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] text-primary focus:bg-[#474550]"
            onChange={handleRangeToChange}
            value={rangeTo}
            placeholder="10"
          />
          <div className="flex flex-col ml-[-20px] mt-1">
            <div
              className="text-[14px]  text-[#ff0000] h-[15px]   rounded-full cursor-pointer"
              onClick={() => handlePressRangeTo(true)}
            >
              <GoChevronUp />
            </div>
            <div
              className="text-[14px]  text-[#ff0000] h-[15px]   rounded-full cursor-pointer"
              onClick={() => handlePressRangeTo(false)}
            >
              <GoChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingInput;
