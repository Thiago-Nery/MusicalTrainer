import { api } from "../../../data/api";

const getRandomTetrad = (type?: string) => {
  let { scale, scaleType, key } = api.getRandomScale(type);
  const tetrad = [key, scale[2], scale[4], scale[6]];
  scaleType = scaleType == "major" ? "maior" : "menor"
  const keyWithType = `${key} ${scaleType}`
  return {
    keyWithType,
    tetrad
  }
};

export const TetradsService = {
  getRandomTetrad,
};
