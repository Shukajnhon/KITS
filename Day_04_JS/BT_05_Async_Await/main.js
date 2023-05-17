// get all data
async function getAll() {
  return fetch('https://fakestoreapi.com/products').then((res) => res.json());
}

// fetch Data
async function fetchData() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.getElementById('products');

  for (let item of products) {
    // console.log(item);
    productsDiv.innerHTML += `
        <div class="items">
        <img class="product-img" src=${item.image} alt="" onclick="goToPage(${item.id})">
        <p>${item.id}</p>
        <h2>${item.title}</h2>
        </div>
    `;
  }
}

// Detail page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const data = fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
  res.json()
);
async function singleItem() {
  const items = await data;
  console.log(items);

  const itemDetail = document.querySelector('#item-detail');
  itemDetail.innerHTML += `
          <div class="items">
          <h2>${items.title}</h2>
          <img class="product-img" src=${items.image} alt="" >
          <p>Giá sản phẩm $${items.price}</p>
          </div>
      `;
}
singleItem();
const goToPage = (id) => {
  window.location.assign(`productDetail.html?id=${id}`);
};

// console.log('queryString: ', queryString);
// console.log('urlParams: ', urlParams);
// console.log('id: ', id);
