import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Gifs from "../../assets/images/short.gif"
const Banner = () => {
  return (
    <>
        <div className="relative h-[56.25vw]">
          <img
            className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
            src={Gifs}
          ></img>
          <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <h1 className="text-white text-1xl md:text-5xl h-full w-[100%] lg:text-6xl font-bold drop-shadow-xl">
              Guardians of the Galaxy Vol. 2
            </h1>
            <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[90%] lg:w-[50%] drop-shadow-xl">
              The Guardians struggle to keep together as a team while dealing
              with their personal family issues, notably Star Lord s encounter
              with his father, the ambitious celestial being Ego.
            </p>
            <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
              <button
                onClick={() => {}}
                className="
                  bg-red-600 
                  rounded-md 
                  py-1 md:py-2 
                  px-2 md:px-4
                  w-auto 
                  text-xs lg:text-lg 
                  font-semibold
                  flex
                  flex-row
                  items-center
                  hover:bg-red-800
                  transition
              "
              >
                <PlayIcon className="w-4 md:w-7 text-black mr-1" />
                  Reproducir
              </button>
              <button
                onClick={() => {}}
                className="
                bg-white
                text-white
                bg-opacity-30 
                rounded-md 
                py-1 md:py-2 
                px-2 md:px-4
                w-auto 
                text-xs lg:text-lg 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-opacity-20
                transition
              "
              >
                <InformationCircleIcon className="w-4 md:w-7 mr-1" />
                Más info
              </button>
              <button
                onClick={() => {}}
                className="
                bg-blue-600
                text-white
                rounded-md 
                py-1 md:py-2 
                px-2 md:px-4
                w-auto 
                text-xs lg:text-lg 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-blue-800
                transition
              "
              >
                <PlayIcon className="w-4 md:w-7 mr-1" />
                Ver tráiler
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;
