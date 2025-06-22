import { api } from "../../../data/api";

const getRandomTriad = (type?: string) => {
  let { scale, scaleType, key } = api.getRandomScale(type);
  const triad = [key, scale[2], scale[4]];
  scaleType = scaleType == "major" ? "maior" : "menor"
  const keyWithType = `${key} ${scaleType}`
  return {
    keyWithType,
    triad
  }
};

export const TriadsService = {
  getRandomTriad,
};
