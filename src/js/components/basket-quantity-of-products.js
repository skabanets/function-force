
export function cartHederNumber() {
     const cartHeader = document.querySelector('.cart-header');
    const bucketLenght = localStorage.getItem('bucket');
    cartHeader.textContent = `Cart (${
      bucketLenght === null ? 0 : JSON.parse(bucketLenght).length
        })`;
    
}
cartHederNumber();
