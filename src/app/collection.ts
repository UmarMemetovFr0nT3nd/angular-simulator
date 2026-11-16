const fruits: string[] = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
const vegetables: string[] = ['carrot', 'broccoli', 'spinach', 'pepper', 'tomato'];

export class Collection<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  getAllItems(): T[] {
    return this.items;
  }

  getItem(index: number): T {
  return this.items[index];
  }

  clearItems(): T[] {
    this.items = [];
    return this.items;
  }

  removeItem(index: number): T[] {
    this.items.splice(index, 1);
    return this.items;
  }

  replaceItem(index: number, newItem: T): T[] {
    this.items[index] = newItem;
    return this.items;
  }
}


const fruitCollection = new Collection<string>(fruits);
const vegetableCollection = new Collection<string>(vegetables);

console.log(fruitCollection.getAllItems());
console.log(fruitCollection.getItem(2));
console.log(fruitCollection.removeItem(1));
console.log(fruitCollection.replaceItem(0, 'pear'));
console.log(fruitCollection.clearItems());

console.log(vegetableCollection.getAllItems());
console.log(vegetableCollection.getItem(2));
console.log(vegetableCollection.removeItem(1));
console.log(vegetableCollection.replaceItem(0, 'lettuce'));
console.log(vegetableCollection.clearItems());