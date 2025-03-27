const fs = require('fs');

class ProductManager {

    products = [];

    constructor() {
        this.products = [];
    }

    addProduct(product) {
    const { id, titulo, descripcion, precio, stock } = product;

    if (this.products.some(p => p.id === id)) {
        console.log(`El producto con ID ${id} ya existe.`);
        return;
    }

    this.products.push(product);
    }

    getProductos() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log(`El producto con ID ${id} no existe.`);
            return;
        }
        return product;
    }
}

module.exports = ProductManager;

