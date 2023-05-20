// Get single product
async function getSingleProduct() {
  const imageImg = document.querySelector('.image-img');
  const thumbImg1 = document.querySelector('.thumb-items-image-1');
  const thumbImg2 = document.querySelector('.thumb-items-image-2');
  const thumbImg3 = document.querySelector('.thumb-items-image-3');

  const price = document.querySelector('.price-number');
  const desc = document.querySelector('.desc-text');

  const title = document.querySelector('.content-title');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  //   console.log('queryString', queryString);
  //   console.log('urlParams', urlParams);
  const id = urlParams.get('');

  const item = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  // .then((json) => console.log(json));
  //   console.log(item);

  imageImg.src = item.image;
  thumbImg1.src = item.image;
  thumbImg2.src = item.image;
  thumbImg3.src = item.image;

  title.innerText = item.title ? item.title : 'No Tittle';
  price.innerText = item.price ? item.price : 'Updating';
  desc.innerText = item.description
    ? item.description
    : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
}

getSingleProduct();
