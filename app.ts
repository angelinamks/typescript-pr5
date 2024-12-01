type BaseProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type Electronics = BaseProduct & {
  category: 'electronics';
  warrantyPeriod: number;
};

type Clothing = BaseProduct & {
  category: 'clothing';
  size: string;
  material: string;
};

type CartItem<T> = {
  product: T;
  quantity: number;
};

const addToCart = <T extends BaseProduct>(
  cart: CartItem<T>[],
  product: T,
  quantity: number
): CartItem<T>[] => {
  cart.push({ product, quantity });
  return cart;
};

const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
  return products.find(product => product.id === id);
};

const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};

function main() {
  const electronics: Electronics[] = [
    {
      id: 1,
      name: "Телефон",
      price: 10000,
      category: 'electronics',
      description: "Смартфон з великим екраном",
      warrantyPeriod: 24
    }
  ];
  
  const phone = findProduct(electronics, 1);
  if (phone) {
    const cart = addToCart([], phone, 1);
    const total = calculateTotal(cart);
    console.log(`Total price: ${total}`);
  }
  
  const affordableElectronics = filterByPrice(electronics, 8000);
  console.log('Affordable electronics:', affordableElectronics);
}

main();
