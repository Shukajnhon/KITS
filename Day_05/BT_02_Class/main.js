class Product {
  constructor(name, price) {
    (this.name = name || 'unknown'), (this.price = price || 'unknown');
  }

  isInStock() {
    const number = Math.floor(Math.random() * 2) + 1;
    // console.log(number);
    console.log(`${number === 1 ? 'Còn Hàng' : 'Hết Hàng'}`);
  }
}

//  Mobile kế thừa từ Product
class Mobile extends Product {
  constructor(brand, name, price) {
    super(name, price);
    this.brand = brand || 'unknown';
  }
  getBrand() {
    console.log(`Brand: ${this.brand}`);
  }
}

// const product = new Product('Iphone 14 Promax 128Gb', 26440000);
const mobile = new Mobile('Apple', 'Iphone 14 Promax 128Gb', 26440000);

console.log(mobile);
mobile.getBrand();
mobile.isInStock();
