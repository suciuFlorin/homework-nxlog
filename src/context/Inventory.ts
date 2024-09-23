import React from "react";
import { ItemType } from "../types/ItemType";

const InventoryContext = React.createContext({
  inventory: {
    rightInventory: [] as ItemType[],
    leftInventory: [] as ItemType[],
  },
  setInventory: (data: any) => {},
});

export default InventoryContext;
