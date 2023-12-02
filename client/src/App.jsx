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
import UserProvider from "./context/UseContext";
import PlaceProvider from "./context/PlaceContext";
import Bookings from "./pages/Bookings";

const App = () => {
  return (
    <BrowserRouter>
      <PlaceProvider>
        <UserProvider>
          <div className=" siteWrap">
            <Navbar />
            <div className="container outlet">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/details/:id" element={<Detail />} />
                <Route path="/bookings" element={<Bookings />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </UserProvider>
      </PlaceProvider>
    </BrowserRouter>
  );
};

export default App;
