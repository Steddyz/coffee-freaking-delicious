import { flavorlists } from "../constants";

const FlavorSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 ${flavor.rotation} lg:w-[50vw] w-96 
            lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt="bg-flavor"
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt="drinks"
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt="elements"
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
