import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FlightsPage from "./Pages/FlightsPage/FlightsPage";
import FlightDetailPage from "./Pages/FlighDetailPage/FlightDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights/to/:cityName/:cityId" element={<FlightsPage/>} />
        <Route path="/flights/:id" element={<FlightDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
