import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteApp from './note';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoteApp />} exact path="*" />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
