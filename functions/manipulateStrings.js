export const makeTitleIntoKey = (title) => {
  const keyName = title[0]
    .toLowerCase()
    .concat(title.slice(1, title.length))
    .replace(/([ _-])/g, "");
  return keyName;
};

export const makeKeyIntoTitle = (key) => {
  const titleName = key[0]
    .toUpperCase()
    .concat(key.slice(1, key.length))
    .replace(/([A-Z])/g, " $1")
    .trim();
  return titleName;
};
