import React, { useEffect, useRef, useCallback } from "react";
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

  const handleScroll = useCallback(() => {
    const container: any = containerRef.current;

    if (
      container?.scrollTop + container?.clientHeight + 5 >=
      container?.scrollHeight
    ) {
      onScrollEnd();
    }
  }, [onScrollEnd]);

  useEffect(() => {
    const container: any = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-[100%]  overflow-y-auto`, className)}
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;
