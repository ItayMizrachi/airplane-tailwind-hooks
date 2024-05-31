const Airplane = () => {
  return (
    <div className="h-56 relative">
      <img
        src="images/strip.png"
        alt="airplane"
        className="w-full h-full object-cover"
      />
      <h1 className="absolute bottom-10 md:left-80 text-white p-2 text-2xl font-semibold">
        Tailwind Makes you pro!
      </h1>
    </div>
  );
};

export default Airplane;
