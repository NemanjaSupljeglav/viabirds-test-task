import React from "react";
import { cn } from "@/utils/helper";

interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={cn(
        `nav-link text-gray-300 hover:text-secColor font-semibold flex  justify-center py-2  max-w-[800px]  cursor-pointer font-medium bg-[#302d3a] text-primary  rounded `,
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
