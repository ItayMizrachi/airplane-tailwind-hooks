import { useMemo, useState } from "react";

const Memo2 = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // useMemo to memoize the square calculation
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  //each time the state of text changes the component rerenders
  //but the memo remembers in the cashe its last result
  //and reuses it instead of running all over again
  //until the dependecies changes which is number in this case
  //without the usememo the function will run all over again
  //and it will be very expensive and run some performance issues in the browser

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Square Memo Calculator
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number-input"
          >
            Number
          </label>
          <input
            id="number-input"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          />
        </div>
        <p className="text-gray-700 text-base mb-4">
          Squared Memo Number: {squaredNumber}
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="text-input"
          >
            Text
          </label>
          <input
            id="text-input"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <p className="text-gray-700 text-base">Text: {text}</p>
      </div>
    </div>
  );
};

export default Memo2;
