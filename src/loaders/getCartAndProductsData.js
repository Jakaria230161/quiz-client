
export const getCartAndProductsData = async () => {
    const productsData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const products = await productsData.json();

    return products

    // const savedCart = getStoredCart()
    // const initialCart = [];
    // for (const id in savedCart) {
    //     const foundProducts = products.find(product => product.id === id)
    //     if (foundProducts) {
    //         const quantity = savedCart[id];
    //         foundProducts.quantity = quantity;
    //         initialCart.push(foundProducts)
    //     }
    // }

    // return { products, initialCart };
}