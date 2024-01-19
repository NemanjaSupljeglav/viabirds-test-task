import { memo, useState } from "react";

import { Button, Input } from "@/common";
import { useGlobalContext } from "@/context/globalContext";
import { mainHeading, maxWidth, paragraph } from "@/styles";
import { cn } from "@/utils/helper";

const MovieCard = () => {
  const [name, setName] = useState<string>("");
  const { createUser } = useGlobalContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUser(name);
  };

  return (
    <div
      className={cn(
        maxWidth,
        ` mx-auto flex items-center h-full  flex-row lg:gap-32 sm:gap-20 mt-12`
      )}
    >
      <div className="text-gray-300 sm:max-w-[80vw] max-w-[90vw]  md:max-w-[420px] font-nunito flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8">
        <h2 className={cn(mainHeading, "text-center")}>Create profile</h2>
        <p className={cn(paragraph, "text-center")}>
          To add your favorite films and unlock personalized features, simply
          input your name and click the button below.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={setName}
            value={name}
            className="mb-3"
            label="User Name"
            placeholder="Enter your name"
          />
          <Button title={"Create Profile"} type="submit" className="w-full" />
        </form>
      </div>
    </div>
  );
};

export default memo(MovieCard);
