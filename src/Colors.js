import { Routes, Route } from "react-router-dom";
import AddNewColor from "./components/AddNewColor";
import Homepage from "./components/Homepage";
import SingleColor from "./components/SingleColor";

function Colors() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/> }/>
      <Route path="/colors/new" element={<AddNewColor/>}/>
      <Route path="/colors/:color" element={<SingleColor/>}/>
    </Routes>
  );
}

export default Colors;
