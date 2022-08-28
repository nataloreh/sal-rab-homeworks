// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {

    let data = {};
    data = JSON.parse(json);
    let products = data.products;
    
    console.log(data.products);
    return data.products;
 
};

function renderProductsCards(json){
    clearProducts();
    let products = parseProducts(json);
    

    let addProduct =[]; 
    for(let i = 0; i < products.length; i++){
        addProduct.push(products[i]);
        
       return addProduct; 
    
    };
}
       

