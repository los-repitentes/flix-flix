const Banner = () => {
  return (
    <>
      <div className="relative h-[56.25vw]">
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
