import { getItem, setItem } from '../storage';
import { renderQuantityOrders } from './basket-quantity-of-products';

// функцію визивати ось так buyItem(e.target, 'клас1', '.клас2', '.клас3', '.клас4')
// в '' будуть приклади слід писати як там, тобто якщо почитанається з '.клас' пишем також '.клас', а не 'клас'
export const buyItem = (target, class1, class2, class3, class4) => {
  if (!target.classList.contains(class1)) return; // тут повинен бути клас який містить вашу кнопку 'buy-btn'
  const id = target.closest(class2).dataset.id; // клас вашой картки або клас в якому ви зберігаєте ід '.cart'
  const data = {
    id,
    amount: 1,
  };
  const bucket = getItem('bucket');
  setItem('bucket', [...bucket, data]);
  const buyBtn = target.closest(class3); // клас кнопки зі значком корзини  '.buy'
  const checkBtn = target.closest(class4).lastElementChild; // клас в якому лежить ваша ціна та кнопка '.buy-info'
  buyBtn.classList.toggle('hidden');
  checkBtn.classList.toggle('hidden');
  renderQuantityOrders();
};
