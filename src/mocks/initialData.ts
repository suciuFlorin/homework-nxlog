import { ItemType } from "../types/ItemType";
// @ts-ignore
import { faker } from "@faker-js/faker";

function generateItem(name: string, position: number): ItemType {
  return { position, name, id: faker.phone.imei() };
}

function generateListOfItems(count: number): ItemType[] {
  let itemsList: ItemType[] = [];

  for (let i = 1; i < count; i++) {
    const name = faker.internet.userName();

    itemsList.push(generateItem(name, i));
  }

  return itemsList;
}

const initialData: { leftInventory: ItemType[]; rightInventory: ItemType[] } = {
  leftInventory: generateListOfItems(4),
  rightInventory: generateListOfItems(2),
};

export default initialData;
