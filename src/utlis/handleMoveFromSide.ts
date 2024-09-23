import { ItemType } from "../types/ItemType";

export const handleMoveFromSide = (
  selectedItemIds: string[],
  inventory: ItemType[],
) => {
  const selectedSet = new Set(selectedItemIds);

  const selected: ItemType[] = [];
  const remaining: ItemType[] = [];

  inventory.forEach((item) => {
    if (selectedSet.has(item.id)) {
      selected.push(item);
    } else {
      remaining.push(item);
    }
  });

  return { selected, remaining };
};
