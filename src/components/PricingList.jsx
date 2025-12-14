import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map(({ id, title, description, price, features }) => (
        <div
          key={id}
          className="bg-n-8 border-n-6 h-full w-76 rounded-4xl border px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto"
        >
          <h4 className="h4 mb-4" style={{ color: `var(--color-color-${parseInt(id) + 1})` }}>
            {title}
          </h4>

          <p className="body-2 text-n-1/50 mb-3 min-h-16">{description}</p>

          <div className="mb-6 flex h-22 items-center">
            {price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{price}</div>
              </>
            )}
          </div>

          <Button
            className="mb-6 w-full"
            href={price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!price}
          >
            {price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {features.map((feature, index) => (
              <li key={index} className="border-n-6 flex items-start border-t py-5">
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
