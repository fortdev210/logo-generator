import Color from "color";

export const negateColor = (color: string) => {
  const colorObj = new Color(color);
  return colorObj.negate().hex();
};
