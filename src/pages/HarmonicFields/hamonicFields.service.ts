import { api } from "../../data/api";

const getRandomHarmonicField = (type?: string) => api.getRandomHarmonicField(type) 

export const HarmonicFieldsService = {
    getRandomHarmonicField
}