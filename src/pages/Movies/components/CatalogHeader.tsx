import bgImg from "@/assets/images/footer-bg.webp";

const CatalogHeader = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.075), rgba(0,0,0,0.075)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="lg:h-[140px] md:h-[132px] sm:h-[114px] h-[96px] relative mt-14"
    />
  );
};

export default CatalogHeader;
