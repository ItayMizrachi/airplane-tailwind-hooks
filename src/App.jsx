import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Airplane from "./components/Airplane";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Gallery from "./components/Gallery";
import HeaderGrid from "./components/HeaderGrid";
import { useCounterStore } from "./store";

const App = () => {
  const count = useCounterStore((state) => state.count);

  console.log(count);
  return (
    <>
      <BrowserRouter>
        <HeaderGrid />
        <Airplane />
        <div className="bg-red-500 h-50 my-10">{count}</div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
