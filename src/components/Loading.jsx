import { loading } from "@/assets";

const Loading = () => (
  <div className="fixed top-0 z-100 flex size-full items-center justify-center bg-black/30 backdrop-blur-[3px]">
    <img className="mr-4 size-10 animate-spin" src={loading} alt="Loading" />
  </div>
);

export default Loading;
