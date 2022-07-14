// Components
import { useState, useEffect, useContext } from "react";

// Components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

// Data
import dummyData from "./dummyData.json";

// Types
import { MoviesDataType } from "./types/types"

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
