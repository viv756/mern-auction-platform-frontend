import H1 from "@/components/H1";
import { steps } from "@/lib/constants";

const HowItWorks = () => {
  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
      <H1>Discover How Elite Auctions Operates</H1>
      <div className="flex flex-col gap-4 my-5">
        {steps.map((element, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-2 lg:p-5 flex flex-col gap-2 group hover:bg-secondary transition-all duration-300">
            <div className="bg-accent text-white p-3 text-xl rounded-full w-fit group-hover:bg-primary transition-all duration-300">
              {element.icon}
            </div>
            <h3
              className={`text-primary text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}>
              {element.title}
            </h3>
            <p className="text-xl text-stone-700 group-hover:text-textcolor transition-all duration-300">
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
