import { getItem } from '../../storage';

const priceTitle = document.querySelector('.js-total-price');

export const countTotalPrice = () => {
  const orders = getItem('bucket');
  const totalValue = orders
    .reduce((total, { amount, price }) => {
      return total + amount * Number(price);
    }, 0)
    .toFixed(2);

  const totalPrice = String(totalValue).replace(/\./g, ',');
  priceTitle.innerHTML = `&#36;${totalPrice}`;
};
