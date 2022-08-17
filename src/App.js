import "./App.css";
import { StickerBoard } from "./components/StickerBoard";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { StickerEdit } from "./components/StickerEdit";
import {ThemeProvider} from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <div className="App">
              <StickerBoard />
            </div>
          }
        />
        <Route path="/sticker/:id" element={<StickerEdit />} />
        <Route
          path="*"
          element={<Navigate to='/home'/>}
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
