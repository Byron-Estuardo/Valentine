import { Routes, Route } from "react-router-dom";
import Inicial from "./Principal";
import PaginaSi from "./PaginaSi";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/si" element={<PaginaSi />} />
    </Routes>
  );
}