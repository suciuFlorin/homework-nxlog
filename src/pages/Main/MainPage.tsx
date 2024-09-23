import { useContext, useState } from "react";
import InventoryContext from "../../context/Inventory";
import styles from "./MainPage.module.scss";
import ColumnItem from "../../components/ColumnItem/ColumnItem";
import ActionItemButton from "../../components/ActionItemButton/ActionItemButton";
import { ItemType } from "../../types/ItemType";
import { handleMoveFromSide } from "../../utlis/handleMoveFromSide";

const MainPage = () => {
  const {
    inventory: { rightInventory, leftInventory },
    setInventory,
  } = useContext(InventoryContext);

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  const { remaining: remainingRight, selected: selectedRight } =
    handleMoveFromSide(selectedItemIds, rightInventory);

  const { remaining: remainingLeft, selected: selectedLeft } =
    handleMoveFromSide(selectedItemIds, leftInventory);

  const handleSelection = (data: ItemType) => {
    let newItems: string[] = [];

    if (selectedItemIds.find((selectedItem) => selectedItem === data.id)) {
      newItems = selectedItemIds.filter(
        (selectedItems) => selectedItems !== data.id,
      );
    } else {
      newItems = [...selectedItemIds, data.id];
    }

    setSelectedItemIds(newItems);
  };

  const handleMoveSelectedToTheLeft = () => {
    setInventory({
      rightInventory: remainingRight,
      leftInventory: [...leftInventory, ...selectedRight],
    });
  };

  const handleMoveSelectedToTheRight = () => {
    setInventory({
      rightInventory: [...rightInventory, ...selectedLeft],
      leftInventory: remainingLeft,
    });
  };

  const handleMoveAllLeft = () => {
    setInventory({
      rightInventory: [],
      leftInventory: [...leftInventory, ...rightInventory],
    });
  };

  const handleMoveAllRight = () => {
    setInventory({
      rightInventory: [...rightInventory, ...leftInventory],
      leftInventory: [],
    });
  };

  return (
    <div className={styles.mainLayout}>
      <ColumnItem
        items={leftInventory}
        handleSelected={handleSelection}
        selectedItemIds={selectedItemIds}
      />
      <div className={styles.buttonsMenu}>
        <ActionItemButton name={"<<"} onClick={handleMoveAllLeft} />
        <ActionItemButton
          isDisabled={!selectedRight.length}
          name={"<"}
          onClick={handleMoveSelectedToTheLeft}
        />
        <ActionItemButton
          isDisabled={!selectedLeft.length}
          name={">"}
          onClick={handleMoveSelectedToTheRight}
        />
        <ActionItemButton name={">>"} onClick={handleMoveAllRight} />
      </div>
      <ColumnItem
        items={rightInventory}
        handleSelected={handleSelection}
        selectedItemIds={selectedItemIds}
      />
    </div>
  );
};

export default MainPage;
