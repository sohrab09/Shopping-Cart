import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
