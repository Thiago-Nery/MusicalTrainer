import { api } from "../../../data/api";

const getRandomIntervalInversion = () => api.getRandomIntervalInversion()

export const IntervalInversionService = {
    getRandomIntervalInversion
}