import React, { useState } from "react";
import "./App.scss";
import MainPage from "./pages/Main/MainPage";
import InventoryContext from "./context/Inventory";
import initialData from "./mocks/initialData";

function App() {
  const [inventory, setInventory] = useState(initialData);

  return (
    <div className="App">
      <InventoryContext.Provider value={{ inventory, setInventory }}>
        <MainPage />
      </InventoryContext.Provider>
    </div>
  );
}

export default App;
