class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    // this._goods = [];
    this.#goods = [];
    this.#allProducts = [];
    this.#fetchGoods();
    this.GoodList();
    this.#render();

    // this.sum = 0; // BAD!
  }

  // goodsTotalPrice() { // Very BAD!
  //   this.#goods.forEach((good) => {
  //     this.sum += good.price;
  //   });
  //
  //   document.querySelector('.someBlock').insertAdjacentHTML('beforeend', `Сумма = ${this.sum}`);
  //   // return НО НЕ this.sum!!!
  // }
  //
  // getTotalWithDiscount(discount) {
  //   return this.goodsTotalPrice() * discount;
  // }

  #fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      console.log(productObject);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }
  GoodList() {
    let allPrice = 0;
    this.#goods.forEach((good) => {
      if(good.price !== undefined) {
        allPrice += good.price;
      }
    });
    const allpriceproduct = `Общая сумма товаров: ${allPrice} рублей`;
    document.querySelector('.products').insertAdjacentHTML('afterend', allpriceproduct)
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = ({ title, price }, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${title}</h3>
//                   <p>${price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);


// Класс корзины
class Basket {
    constructor() {
        // В классе корзины массив с добавленными товарами
        this.addGoods = [];
    }
    // Добавление товара в корзину 
    addToBasket() {}

    // Удаление товара из корзины 
    deleteFromBasket() {}

    // Колличество товара и общая сумма
    calcBasket() {}

}
