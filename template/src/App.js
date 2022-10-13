import React from "react";
import  "./App.css";
/* import { Garagem } from "./componentes/garagem"; */
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";
import logo from "./img/logo.png";

export default function App() {
  

  return (
    <div className="App">
      
     {/* <h1>Aula - Componentes React</h1> */}

{/* <Garagem /> */}
<Header />
<Footer />

    </div>
  );
}


