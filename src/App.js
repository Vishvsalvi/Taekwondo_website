import Navbar from "./Components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Committee from "./Pages/Committee";
import Gallery from "./Pages/Gallery";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
        <Route path="*" element={<Error/>}  />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
