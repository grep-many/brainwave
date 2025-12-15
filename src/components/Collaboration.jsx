import { brainwaveSymbol, check } from "@/assets";
import { collabApps, collabContent, collabText } from "@/constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => (
  <Section crosses className="overflow-x-hidden">
    <div className="container lg:flex">
      <div className="max-w-100">
        <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>

        <ul className="mb-10 max-w-88 md:mb-14">
          {collabContent?.length &&
            collabContent.map(({ id, title, text }) => (
              <li className="mb-3 py-3" key={id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{title}</h6>
                </div>
                {text && <p className="body-2 text-n-4 mt-3">{text}</p>}
              </li>
            ))}
        </ul>

        <Button>Try it now</Button>
      </div>

      <div className="mt-4 lg:ml-auto xl:w-152">
        <p className="body-2 text-n-4 mb-8 md:mb-16 lg:mx-auto lg:mb-32 lg:w-88">{collabText}</p>

        <div className="border-n-6 scale:75 relative left-1/2 flex aspect-square w-88 -translate-x-1/2 rounded-full border md:scale-100">
          <div className="border-n-6 m-auto flex aspect-square w-60 rounded-full border">
            <div className="bg-conic-gradient m-auto aspect-square w-24 rounded-full p-[0.2rem]">
              <div className="bg-n-8 flex h-full w-full items-center justify-center rounded-full">
                <img src={brainwaveSymbol} width={48} height={48} alt="brainwave" />
              </div>
            </div>
          </div>

          <ul>
            {collabApps?.length &&
              collabApps.map(({ id, width, icon, height, title }, index) => (
                <li
                  key={id}
                  className="absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom"
                  style={{ transform: `rotate(${index * 45}deg)` }}
                >
                  <div
                    className="bg-n-7 border-n-1/15 relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border"
                    style={{ transform: `rotate(-${index * 45}deg)` }}
                  >
                    <img className="m-auto" width={width} height={height} alt={title} src={icon} />
                  </div>
                </li>
              ))}
          </ul>

          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </div>
  </Section>
);

export default Collaboration;
