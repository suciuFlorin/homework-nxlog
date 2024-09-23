import { ItemType } from "../../types/ItemType";
import styles from "./ColumnItem.module.scss";
import RowItem from "../RowItem/RowItem";

interface ColumnItemProps {
  items: ItemType[];
  selectedItemIds?: string[];
  handleSelected: (data: ItemType) => void;
}

const ColumnItem = ({
  items,
  handleSelected,
  selectedItemIds = [],
}: ColumnItemProps) => {
  return (
    <div className={styles.columnContainer}>
      {items.length > 0
        ? items.map((item) => (
            <RowItem
              key={item.id}
              data={item}
              handleSelected={handleSelected}
              isSelected={
                !!selectedItemIds.find(
                  (selectedItemID) => selectedItemID === item.id,
                )
              }
            />
          ))
        : "No Data"}
    </div>
  );
};

export default ColumnItem;
