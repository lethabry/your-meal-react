export const convertObjToQueryString = (obj) => {
  const result = [];
  for (const key in obj) {
    result.push(`${key}=${obj[key]}`);
  }
  return result.join('&');
};
