import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import RoomList from "./pages/roomlist";
import Layout from "./pages/Layout";
import './styles/App.css';


function App() {

  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/homepage"  element={<><Layout/><Homepage/></>}></Route>
      <Route path="/rooms" element={<RoomList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
