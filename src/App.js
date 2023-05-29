import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FlightsPage from "./Pages/FlightsPage/FlightsPage";
import FlightDetailPage from "./Pages/FlighDetailPage/FlightDetailPage";
import HotelsPage from "./Pages/HotelsPage/HotelsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights/to/:cityName/:cityId" element={<FlightsPage/>} />
        <Route path="/flights/:id" element={<FlightDetailPage/>} />
        <Route path="/hotels/:cityName" element={<HotelsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
