import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from "../components";



import React from 'react';

import './App.css';

function App() {
  const user=true;
  return (
    <div className="App">
      <Header />
        <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;



