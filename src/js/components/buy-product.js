import { getItem, setItem } from '../storage';

export const buyItem = target => {
  if (!target.classList.contains('buy-btn')) return;
  const id = target.closest('.cart').dataset.id;
  const data = {
    id,
    amount: 1,
  };
  const bucket = getItem('bucket');
  setItem('bucket', [...bucket, data]);
  const buyBtn = target.closest('.buy');
  const checkBtn = target.closest('.buy-info').lastElementChild;
  buyBtn.classList.toggle('hidden');
  checkBtn.classList.toggle('hidden');
};
