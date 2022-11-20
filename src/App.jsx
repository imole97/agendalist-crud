import { Route, Routes } from "react-router-dom";
import AgendaHome from "./pages/AgendaHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AgendaHome/>} />
      </Routes>
    </>
  );
}

export default App;
