import { api } from "../../data/api";

const getRandomScale = (type?: string) => api.getRandomScale(type)

export const ScaleService = {
    getRandomScale,
}