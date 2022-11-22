import { Route, Routes } from "react-router-dom";
import AgendaDetails from "./pages/AgendaDetails";
import AgendaHome from "./pages/AgendaHome";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AgendaHome/>} />
        <Route path="agenda/:id" element={<AgendaDetails/>} />
      </Routes>
    </>
  );
}

export default App;
