

import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <>
        <div className="content">
        <div className="relative h-[58vw] overflow-hidden">
        <video
  poster="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  className="mx-auto w-[95%] h-[56.25vw] object-cover object-center rounded-lg border-2 border-gray-300 brightness-[60%] transition duration-500"
  autoPlay
  muted
  loop
  src=""
></video>




        <div className="absolute top-[20%] md:top-[30%] ml-4 md:ml-16 lg:ml-32 text-white w-3/4">
        
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            Guardians of the Galaxy Vol. 2
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6">
            The Guardians struggle to keep together as a team while dealing with
            their personal family issues, notably Star-Lord's encounter with his
            father, the ambitious celestial being Ego.
          </p>
          <div className="flex flex-row items-center md:visible invisible mt-4 gap-4">
            <button
              onClick={() => {}}
              className="
                bg-red-600 
                rounded-md 
                py-2 
                px-4
                text-xs md:text-base 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-red-500
                transition
              "
            >
              <PlayIcon className="w-6 h-6 mr-2" />
              Reproducir
            </button>
            <button
              onClick={() => {}}
              className="
                bg-white 
                text-black
                rounded-md 
                py-2 
                px-4
                text-xs md:text-base 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-opacity-80
                transition
              "
            >
              <InformationCircleIcon className="w-6 h-6 mr-2" />
              Más info
            </button>
            <button
              onClick={() => {}}
              className="
                bg-blue-600 
                rounded-md 
                py-2 
                px-4
                text-xs md:text-base 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-blue-500
                transition
              "
            >
              <PlayIcon className="w-6 h-6 mr-2" />
              Ver tráiler
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
