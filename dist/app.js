"use strict";
const addToCart = (cart, product, quantity) => {
    cart.push({ product, quantity });
    return cart;
};
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
const findProduct = (products, id) => {
    return products.find(product => product.id === id);
};
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
function main() {
    const electronics = [
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
