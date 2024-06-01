import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Airplane from "./components/Airplane";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Gallery from "./components/Gallery";
import HeaderGrid from "./components/HeaderGrid";
import CartStore from "./components/cart/CartStore";
import { useStoreSelectors } from "./store/store";
import Combine from "./components/Combine";
import Form from "./components/Form";
import Memo2 from "./components/Memo2";

const App = () => {
  const increment = useStoreSelectors.use.increment();
  const decrement = useStoreSelectors.use.decrement();
  const count = useStoreSelectors.use.count();

  //callback example , print calls sum the callback function
  const print = (cb) => {
    let a = 2;
    let b = 3;
    let s = cb(a, b);
    return s;
  };

  const sum = (a, b) => a + b;

  console.log(print(sum));

  return (
    <>
      <BrowserRouter>
        <HeaderGrid />
        <Airplane />
        <div className="mx-auto flex justify-center mt-10">
          <button
            className="bg-blue-200 p-2 rounded-lg mr-2"
            onClick={increment}
          >
            Increment
          </button>
          <button className="bg-red-200 p-2 rounded-lg " onClick={decrement}>
            Decrement
          </button>
        </div>
        <h2 className="text-center mt-5 font-semibold text-2xl">
          Count: {count}
        </h2>
        <Combine />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cartstore" element={<CartStore />} />
        </Routes>
        {/* <Memo /> */}
        <Memo2 />
        <Form />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
