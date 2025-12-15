import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "@/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use" className="overflow-hidden">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="border-n-1/10 relative z-1 mb-5 flex h-156 items-center overflow-hidden rounded-3xl border p-8 lg:p-20 xl:h-184">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-68">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-3 mb-12">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="border-n-6 flex items-start border-t py-4">
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="border-n-1/10 lg-right-auto absolute right-4 bottom-4 left-4 border lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="border-n-1/10 relative min-h-156 overflow-hidden rounded-3xl border">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="from-n-8/0 to-n-8/90 absolute inset-0 flex flex-col justify-end bg-linear-to-b p-8 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 text-n-3 mb-12">
                  Automatically enhance your photos using our AI app&apos;s photo editing feature.
                  Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="bg-n-7 overflow-hidden rounded-3xl p-4 lg:min-h-184">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-8">
                  The world’s most powerful AI photo and video art generation engine. What will you
                  create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "bg-conic-gradient h-12 w-12 p-0.25 md:h-18 md:w-18"
                          : "bg-n-6 flex h-10 w-10 md:h-15 md:w-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "bg-n-7 flex h-full w-full items-center justify-center rounded-2xl"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-n-8 relative h-80 overflow-hidden rounded-xl md:h-100">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
