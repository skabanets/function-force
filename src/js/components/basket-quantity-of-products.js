export function renderQuantityOrders() {
  const ordersCounter = document.querySelectorAll('.js-order-counter');
  const bucketLenght = localStorage.getItem('bucket');

  ordersCounter.forEach(element => {
    element.textContent = `${
      bucketLenght === null ? 0 : JSON.parse(bucketLenght).length
    }`;
  });
}

renderQuantityOrders();
