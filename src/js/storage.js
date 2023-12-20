export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log(
      `Could not save '${key}:${value}' to Local Sorage. Error:`,
      error
    );
  }
};

export const getItem = key => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue === null ? [] : JSON.parse(serializedValue);
  } catch (error) {
    console.log(`Could not retrieve '${key}' from Local Sorage. Error:`, error);
  }
};

export const removeItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(`Could not remove '${key}' from Local Sorage. Error:`, error);
  }
};
