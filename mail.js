class GoodsProduct {
    constructor(title = 'Товар', price = 'Цена товара', id = 'Номер товара') {
        this.title = title;
        this.prise = price;
        this.id = id;
    }


    render() {
        return `<div class="product-item" data-id='${this.id}'>
            <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="by-btn">Добавить в корзину</button>
                </div>
              </div>`;
    }

}


class GoodsList {
    constructor() {
        this.product = []
    }
    fetchGoods () {
        this.product = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }
    render() {
        const listCode = '';
        this.product.forEach((good) => {
            goodsItem = new GoodItem(product.title, product.price, product.id);
            listCode += goodsItem.render();
        })
        document.querySelector('.product-list').innerHTML = listCode;
    }
    calcAllGoods () {
        const morePrice = 0;
        this.product.forEach((product) =>{
            if(product.price !=== undefined) {
                morePrice += this.product.price;
            }
        });
        const 
    }
}




// const products = 

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить в корзину</button>
//               </div>`;
// }

// // const renderProducts = (list) => {
// //     const productList = list.map((item) => {
// //         return renderProduct(item.title, item.price);
// //     });

// //     console.log(productList);
// //     document.querySelector('.products').innerHTML = productList;
// // }


// const renderProducts = list => {
//     document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item.title, item.price)).join(''));
// };




// renderProducts(products);