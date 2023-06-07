import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import RoomList from "./pages/roomlist";
import BookingPage from './pages/confirmbookPage'
import Login from './pages/login'


import './styles/App.css';


function App() {

  // testing if able to pass value from the value gets from another page to another page
  const getDateTesting = {
    arrivingDate: "05/20/2023",
    departingDate: "06/23/2023"
}

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/homepage"  element={<><Homepage/></>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/rooms" element={<RoomList arriveDate={getDateTesting.arrivingDate} departDate={getDateTesting.departingDate}/>}></Route>
      <Route path="/form" element={<BookingPage arriveDate={getDateTesting.arrivingDate} departDate={getDateTesting.departingDate}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
