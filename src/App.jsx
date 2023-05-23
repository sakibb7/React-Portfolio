import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Age from "./pages/Age";

function App() {
  return (
    <>
      <div className="w-full h-auto font-bodyFont text-primaryColor">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age" element={<Age />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
