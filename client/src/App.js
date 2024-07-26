import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CreateRecipe } from "./pages/create-recipe-page";
import { SavedRecipes } from "./pages/saved-recipes-page";
import Auth from "./pages/Auth";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
