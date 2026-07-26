import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./features/cart/Cart";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
