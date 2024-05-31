const Footer = () => {
  return (
    <div className=" bg-slate-900 text-gray-300">
      <div className="max-w-[1040px] mx-auto  min-h-56">
        <div className="w-full md:flex md:justify-around md:space-x-4 space-y-4 md:space-y-0 p-6">
          <div className=" w-full">
            <h2 className="text-2xl bg-gray-400 p-2 text-gray-100">About</h2>
            <ul className="mt-4 pl-4 list-disc list-inside">
              <li>hello</li>
              <li>About us</li>
              <li>Carrer</li>
              <li>Information</li>
            </ul>
          </div>
          <div className=" w-full">
            <h2 className="text-2xl bg-gray-400 p-2 text-gray-100">
              New Services
            </h2>
            <ul className="mt-4 pl-4 list-disc list-inside">
              <li>hello</li>
              <li>About us</li>
              <li>Carrer</li>
              <li>Information</li>
            </ul>
          </div>{" "}
          <div className=" w-full">
            <h2 className="text-2xl bg-gray-400 p-2 text-gray-100">
              Contact Us
            </h2>
            <div className="mt-4 pl-4 ">
              <p>555 123 1232</p>
              <p>itaym98@gmail.com</p>
              <p>5 place road park</p>
              <p>New York 1243</p>
            </div>
          </div>{" "}
          <div className=" w-full flex justify-center p-3">
            <img src="images/paypal.png" alt="paypal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
