import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <>
      <div className="relative h-[72vw]">
        <video
          poster="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          className="w-full h-[74.5vw] object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
          src=""
        ></video>
        <div className="absolute top-[20%] md:top-[30%] ml-4 md:ml-16 lg:ml-32">
          <p className="text-white text-1xl md:text-5xl h-full w-[60%] lg:text-7xl font-bold drop-shadow-xl">
            Guardians of the Galaxy Vol. 2
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl pb-44">
            The Guardians struggle to keep together as a team while dealing with
            their personal family issues, notably Star Lord s encounter with his
            father, the ambitious celestial being Ego.
          </p>
          <div className="flex flex-row items-center lg:invisible md:visible mt-3 md:mt-4 gap-3">
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
              bg-white 
                rounded-md 
                py-1 md:py-2 
                px-2 md:px-4
                w-auto 
                text-xs lg:text-lg 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-neutral-300
                transition
                "
            >
              <PlayIcon className="w-4 md:w-7 text-black mr-1" />
              Play
            </button>
          </div>
          <div className="absolute h-[16.5vw] w-full lg:visible md:invisible">
            <section className="flex flex-row h-full">
              <div className="h-full">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
                  alt="Poster"
                  className="h-full w-96 object-cover"
                />
              </div>
              <div className="bg-neutral-900 w-full h-full bg-opacity-70 flex flex-row pr-0 justify-evenly items-center">
                <button
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
                    hover:bg-red-500
                    transition
                    opac
                    "
                >
                  <PlayIcon className="w-6 h-12 mr-1" />
                  Ver pelicula
                </button>

                <button
                  className="
                    bg-neutral-600 
                    rounded-md 
                    py-1 md:py-2 
                    px-2 md:px-4
                    w-auto 
                    text-xs lg:text-lg 
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-neutral-500
                    transition
                    opac
                    "
                >
                  <InformationCircleIcon className="w-6 h-12 mr-1" />
                  Mas info
                </button>

                <button
                  className="
                    bg-blue-600 
                    rounded-md 
                    py-1 md:py-2 
                    px-2 md:px-4
                    w-auto 
                    text-xs lg:text-lg 
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-blue-500
                    transition
                    opac
                    "
                >
                  <PlayIcon className="w-6 h-12 mr-1" />
                  Ver tráiler
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="relative mt-20 h-[56.25vw]">
        <video
          poster="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
          src=""
        ></video>
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <p className="text-white text-1xl md:text-5xl h-full w-[60%] lg:text-8xl font-bold drop-shadow-xl">
            Guardians of the Galaxy Vol. 2
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            The Guardians struggle to keep together as a team while dealing with
            their personal family issues, notably Star Lord s encounter with his
            father, the ambitious celestial being Ego.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
