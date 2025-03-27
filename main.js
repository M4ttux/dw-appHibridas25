const ProductManager = require("./index");

const manager = new ProductManager();

manager.addProduct({
    id: 1,
    title: "Teclado",
    description: "Teclado Mecánico",
    price: 25000,
    stock: 25
});

manager.addProduct({
    id: 2,
    title: "Auricular",
    description: "Teclado Mecánico",
    price: 25000,
    stock: 25
});

console.log(manager.getProductos());

console.log(manager.getProductById(1));  // Debe devolver el producto
console.log(manager.getProductById(2));  // Debe mostrar "Not found"
