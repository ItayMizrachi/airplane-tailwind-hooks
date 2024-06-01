import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);

  // useRef to keep track of the previous count value
  const prevCountRef = useRef();

  // useEffect runs after each render, updating the previous count value
  useEffect(() => {
    // Update the ref with the current count after each render
    prevCountRef.current = count;
  }, [count]);

  // Accessing the previous count value from the ref
  const prevCount = prevCountRef.current;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Blue background for the top half */}
      <div className="bg-gray-200 w-full h-1/2 absolute top-0 left-0"></div>
      {/* Red background for the bottom half */}
      <div className="bg-gray-100 w-full h-1/2 absolute bottom-0 left-0"></div>
      {/* Content */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm relative z-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Previous Value Example
        </h1>
        {/* Content above blue background */}
        <div className="mb-4">
          <p className="text-gray-700 text-base">Current Count: {count}</p>
          <p className="text-gray-700 text-base">Previous Count: {prevCount}</p>
        </div>
        {/* Content above red background */}
        <div className="mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ref;
