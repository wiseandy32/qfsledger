import Slide from "./Slide";
import { chooseUsCardInfo } from "@/data";

function WhyChooseUs() {
  return (
    <section className="mt-[5rem] mb-20 sm:mt-32 sm:mb-32 md:mt-30 md:mb-40 sm:px-10">
      <div className="flex flex-col-reverse sm:flex-row justify-between sm:mt-0  gap-16 sm:gap-0">
        <div className="flex flex-col gap-y-4 sm:gap-y-10 px-5">
          <Slide yAxis={90}>
            <p className="text-sm mb-2 text-sky-500 capitalize">
              Quantumledge Global
            </p>
            <h2 className="md:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 capitalize">
              Start Your Secure Journey Today:
            </h2>
            <p className="mt-4 max-w-3xl space-y-6 text-slate-50 ">
              Choose QFS Ledger for cutting-edge security, seamless assets
              management, and peace of mind. Our commitment to stability and
              protection ensures your digital assets are safe and accessible
              whenever you need them
            </p>
          </Slide>
          <div className="grid grid-cols-[300px,300px,300px,300px,300px,300px] md:grid-cols-3 overflow-x-auto gap-5 mt-20 backdrop-blur-md">
            {chooseUsCardInfo.map((item, index) => (
              <Slide
                key={item.title}
                yAxis={90}
                delay={index === 0 ? 0.2 : 0.2 * index}
                className={`md:col-start-[${index + 1}] md:col-end-[${
                  index + 3
                }] bg-slate-800 highlight-white/5 rounded-lg p-6 text-white hover:bg-slate-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="rounded-lg w-full h-[250px] md:h-fit object-cover object-center md:object-contain"
                />
                <h5 className="text-white font-semibold text-2xl capitalize mt-2">
                  {item.title}
                </h5>
                <p className="mt-6 text-slate-50">{item.subtext}</p>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
