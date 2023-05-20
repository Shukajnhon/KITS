// get all data
window.onload = () => {
  async function getAll() {
    const product = await fetch('https://fakestoreapi.com/products').then(
      (res) => res.json()
    );
    // console.log(product);
    const productCard = document.querySelector('.product-card');
    product.map((item) => {
      // console.log()
      return (productCard.innerHTML += `
                        <div class="card">
                             <div class="card-img" onclick="goToDetail(${
                               item.id
                             })">
                                 <img src="${
                                   item.image
                                 }" class="card-img-top" alt="${item.title}">
                                </div>
                           
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description.slice(
                                  0,
                                  100
                                )}...</p>
                                <button type="button" class="btn btn-primary card-btn" onclick="goToDetail(${
                                  item.id
                                })">More info</button>
                            </div>
                        </div>
      `);
    });
  }
  getAll();
  console.log('Hello');
};

const goToDetail = (id) => {
  window.location.assign(`detailProduct.html?=${id}`);
};
