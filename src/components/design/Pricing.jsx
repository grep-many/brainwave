import { lines } from "../../assets";

export const LeftLine = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 right-full hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 lg:block">
      <img className="w-full" src={lines} width={1480} height={177} alt="Lines" />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 left-full hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 -scale-x-100 lg:block">
      <img className="w-full" src={lines} width={1480} height={177} alt="Lines" />
    </div>
  );
};
