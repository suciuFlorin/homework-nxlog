import { ItemType } from "../../types/ItemType";
import styles from "./RowItem.module.scss";

interface RowItemProps {
  data: ItemType;
  isSelected: boolean;
  handleSelected: (data: ItemType) => void;
}

const RowItem = ({
  data,
  handleSelected,
  isSelected = false,
}: RowItemProps) => {
  return (
    <div
      className={`${styles.item} ${isSelected ? styles.selected : ""}`}
      onClick={() => handleSelected(data)}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => handleSelected(data)}
      />
      <div className={styles.ellipsis}>{data.name}</div>
    </div>
  );
};

export default RowItem;
