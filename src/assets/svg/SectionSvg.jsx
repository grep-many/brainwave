import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`absolute -top-1.25 left-6.25 hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-8.75`}
      />

      <PlusSvg
        className={`absolute -top-1.25 right-6.25 hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-8.75`}
      />
    </>
  );
};

export default SectionSvg;
