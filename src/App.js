import { Routes, Route } from "react-router-dom";
import { MainPage, SearchPage } from "./pages";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
