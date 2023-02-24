export const findX = (distance, angle) => {
  return distance * Math.sin((Math.PI * 2 * angle) / 360) + distance;
};

export const findY = (distance, angle) => {
  return distance * Math.cos((Math.PI * 2 * angle) / 360) + distance;
};
