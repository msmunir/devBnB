import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import About from "./pages/About";
import Support from "./pages/Support";
import Detail from "./pages/Detail";
import AccommodationProvider from "./context/AccommodationContext";
import UserProvider from "./context/UseContext";
// import UserProvider from "./context/UserContext";
// import PlaceProvider from "./context/PlaceContext";

const App = () => {
  return (
    <BrowserRouter>
      <AccommodationProvider>
        {/* <PlaceProvider> */}
        <UserProvider>
          <div className="container siteWrap">
            <Navbar />
            <div className="outlet">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/details/:id" element={<Detail />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </UserProvider>
        {/* </PlaceProvider> */}
      </AccommodationProvider>
    </BrowserRouter>
  );
};

export default App;
