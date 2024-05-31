import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Airplane from "./components/Airplane";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Gallery from "./components/Gallery";
import HeaderGrid from "./components/HeaderGrid";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderGrid />
        <Airplane />
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
