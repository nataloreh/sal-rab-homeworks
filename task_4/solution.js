// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {

    let data = JSON.parse(json);
    
    return data.products;
 
};

function renderProductsCards(json){
    clearProducts();
    let products = parseProducts(json);
    
    for(let i = 0; i < products.length; i++){
        addProduct(products[i]);
         
    };
}
       

