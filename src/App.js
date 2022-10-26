import React from "react";
import PlantillaProducto from './View/PlantillaProducto';
import Header  from "./components/Header";
import Footer  from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";

const App=()=> {
  return (
    <div className="App">
      <Header />
      <Banner />
      <PlantillaProducto />
      <Footer />
    </div>
  );
}

export default App;
