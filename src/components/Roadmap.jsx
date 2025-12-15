import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
        {roadmap.map(({ id, title, text, date, status, imageUrl, colorful }) => (
          <div
            className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-28 ${
              colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={id}
          >
            <div className="bg-n-8 relative overflow-hidden rounded-[2.4375rem] p-8 xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <img src={grid} width={550} height={550} alt="Grid" />
              </div>
              <div className="relative z-1">
                <div className="mb-8 flex max-w-108 items-center justify-between md:mb-20">
                  <Tagline>{date}</Tagline>

                  <div className="bg-n-1 text-n-8 flex items-center rounded px-4 py-1">
                    <img
                      className="mr-2.5"
                      src={status === "done" ? check2 : loading1}
                      width={16}
                      height={16}
                      alt={status}
                    />
                    <div className="tagline">{status === "done" ? "Done" : "In progress"}</div>
                  </div>
                </div>

                <div className="-mx-15 -my-10 mb-10">
                  <img className="w-full" src={imageUrl} width={628} height={426} alt={title} />
                </div>
                <h4 className="h4 mb-4">{title}</h4>
                <p className="body-2 text-n-4">{text}</p>
              </div>
            </div>
          </div>
        ))}

        <Gradient />
      </div>

      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button href="#roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
