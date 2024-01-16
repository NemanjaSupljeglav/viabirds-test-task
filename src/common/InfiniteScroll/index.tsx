import React, { useEffect, useRef } from "react";

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
    <div ref={containerRef} className="h-[1000px]  overflow-y-auto">
      {children}
    </div>
  );
};

export default InfiniteScroll;
