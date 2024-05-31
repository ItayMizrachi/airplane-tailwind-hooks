const Main = () => {
  const boxes2 = [
    {
      heading: "lorem impsum",
      img: "images/space.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla ",
    },
    {
      heading: "Music",
      img: "images/music.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla ",
    },
    {
      heading: "Anime",
      img: "images/record.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla ",
    },
    {
      heading: "Space",
      img: "images/video.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla ",
    },
  ];

  return (
    <div className=" p-8 md:flex  flex-wrap md:justify-center">
      {boxes2.map((item) => (
        <div
          className="border rounded-xl min-h-72 w-56 md:mx-4 pb-4 mx-auto my-4"
          key={item.img}
        >
          <div className="text-white font-bold mb-8 bg-blue-300 border-b-4 border-b-blue-500 p-4 text-center rounded-t-lg">
            <h3>{item.heading}</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={item.img} alt="img" />
            <p className="mt-4 mx-2">{item.desc}</p>
            <button className="mt-3 text-blue-500">More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
