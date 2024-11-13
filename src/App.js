import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* Utilisation du BrowserRouter pour gérer les routes de l'application. */}
    <div className='AppContainer'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<APropos />} />
          <Route path="location/:id" element={<Location />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
