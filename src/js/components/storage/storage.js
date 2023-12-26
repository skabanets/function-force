import { Notify } from 'notiflix';

export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    return Notify.failure(
      `Could not save '${key}:${value}' to Local Sorage. Error:`
    );
  }
};

export const getItem = key => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue === null ? [] : JSON.parse(serializedValue);
  } catch (error) {
    return Notify.failure(`Could not retrieve '${key}' from Local Sorage`);
  }
};

export const removeItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    return Notify.failure(
      `Could not remove '${key}' from Local Sorage. Error:`,
      error
    );
  }
};
