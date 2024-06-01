import { useMemo, useState } from "react";
import { initialItems } from "../lib/utils";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  //useMemo syntax
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  //const selectedItemBad = items.find((item) => item.isSelected);
  //BAD - USING 2 MUCH RESOURCES
  //LOOPS INTO ALL OF THE GIANT ARRAY EACH TIME ITS CALLED - CAUSING BAD PERFORMANCE

  return (
    <div className="border rounded-lg mx-auto text-center my-10 max-w-64 p-">
      <h1>Memo Example</h1>
      <h2>Count: {count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 rounded-lg bg-indigo-500"
      >
        Icrement Memo Count
      </button>
    </div>
  );
};

export default Memo;
