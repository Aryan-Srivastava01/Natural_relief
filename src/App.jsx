import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HairHealthForm from "./pages/HairHealthForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
    <BrowserRouter>
    <Toaster position="top-center" />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/hair-test" element={<HairHealthForm />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
