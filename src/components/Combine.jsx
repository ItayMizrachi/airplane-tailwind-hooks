import { useBoundSelectors } from "./combined-stores/combined-stores";

const Combine = () => {
  //   const bears = useBoundStore((state) => state.bears);
  //   const fishes = useBoundStore((state) => state.fishes);
  //   const addBear = useBoundStore((state) => state.addBear);

  const bears = useBoundSelectors.use.bears();
  const fishes = useBoundSelectors.use.fishes();
  const addBear = useBoundSelectors.use.addBear();

  return (
    <div className="mx-auto text-center">
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button className="bg-blue-200 p-2 text-center" onClick={() => addBear()}>
        Add a bear
      </button>
    </div>
  );
};

export default Combine;
