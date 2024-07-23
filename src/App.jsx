import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Static/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
