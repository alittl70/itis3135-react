import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import ITIS3135 from "./pages/itis3135";
import Survey from "./pages/Survey";
import Cards from "./pages/Cards";
import Inventory from "./pages/Inventory";
import Documentation from "./pages/Documentation";
import Product from "./pages/Product";
import Contract from "./pages/Contract";
import FCC from "./pages/FCC";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <header>
        <h1>Alanah Little | Adventurous Lion</h1>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/fcc" element={<FCC />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/itis3135" element={<ITIS3135 />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;