export const setSessionStorage = (key, value) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};
export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};
export const deleteSessionStorage = () => {
  return sessionStorage.clear();
};
