import { gradient } from "../../assets";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute top-73 -left-121.5 w-226.5 opacity-60 mix-blend-color-dodge">
      <div className="absolute top-1/2 left-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img className="w-full" src={gradient} width={942} height={942} alt="Gradient" />
      </div>
    </div>
  );
};
