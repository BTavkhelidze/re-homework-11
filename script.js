const products1 = [
  {
    title: 'Gray T-Shirt',
    price: '$14.99',
    img: ' ./images/GrayTShirt.png',
  },
  {
    title: 'Black Jeans',
    price: '$34.99',
    img: ' ./images/BlackJeans.png',
  },
  {
    title: 'Green Jacket',
    price: '$59.95',
    img: ' ./images/GreenJacket.png',
  },
  {
    title: 'White Sneakers',
    price: '$49.95',
    img: './images/WhiteSneakers.png',
  },
];

const products2 = [
  {
    title: 'Blue Sweatshirt',
    price: '$29.95 - $179.95',
    img: './images/BlueSweatshirt.png',
    colors: ['blue', 'black'],
  },
  {
    title: 'Red Hoodie',
    price: '$24.95 - $149.95',
    img: './images/RedHoodie.png',
    colors: ['red', 'green'],
  },
  {
    title: 'Yellow Pullover',
    price: '$19.95 - $129.95',
    img: './images/YellowPullover.png',
    colors: ['yellow', 'orange'],
  },
  {
    title: 'Purple Jacket',
    price: '$39.95 - $199.95',
    img: './images/WhiteSneakers.png',
    colors: ['purple', 'pink'],
  },
];

const firstSectionContainer = document.querySelector(
  '.section__first__container'
);

const secondSectionContainer = document.querySelector(
  ' .section__second__container'
);

function createCards(products, section) {
  products.forEach((product) => {
    //! create main-div container
    const productContainer = document.createElement('div');
    productContainer.className = 'product__wrapper';

    //! image
    const productImage = document.createElement('img');
    productImage.src = product.img;

    //! describtion
    const productDescribtion = document.createElement('p');
    productDescribtion.textContent = product.title;
    productDescribtion.className = 'describtion';

    //! price
    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    productPrice.className = 'price';

    productContainer.appendChild(productImage);
    productContainer.appendChild(productDescribtion);
    productContainer.appendChild(productPrice);

    //! main-div inside section
    section.appendChild(productContainer);
  });
}

createCards(products1, firstSectionContainer);
createCards(products2, secondSectionContainer);
