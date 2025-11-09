import { api } from "../../../data/api";

const getRandomInterval = () => api.getRandomInterval()

export const IntervalClassificationService = {
    getRandomInterval
}