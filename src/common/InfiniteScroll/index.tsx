import React, { useEffect, useRef } from "react";

import { cn } from "@/utils/helper";

interface InfiniteScrollProps {
  className?: string;
  onScrollEnd: () => void;
  children?: any;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  className,
  children,
  onScrollEnd
}) => {
  const containerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container: any = containerRef.current;

      if (
        container?.scrollTop + container?.clientHeight + 5 >=
        container?.scrollHeight
      ) {
        onScrollEnd();
      }
    };

    const container: any = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(`h-[1000px]  overflow-y-auto`, className)}
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;
