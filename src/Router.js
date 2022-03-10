import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Booking />} />
        <Route path="/events/booking" exact element={<Booking />} />
        <Route path="/events/booking/payment" exact element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
