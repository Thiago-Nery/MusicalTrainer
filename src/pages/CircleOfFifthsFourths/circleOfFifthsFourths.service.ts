import { api } from "../../data/api";

const getFifthOrFourth = (type?: string) =>{ 
    const { harmonicField, key } = api.getRandomHarmonicField(type) 
    const fourthFifthDegree = [{
        note: harmonicField[3],
        degreeName: "fourth"
    },{
        note: harmonicField[4],
        degreeName: "fifth"
    }]
    const randomDegree = fourthFifthDegree[Math.floor(Math.random() * fourthFifthDegree.length)]

    return {
        key,
        randomDegree
    }
}

export const CircleOfFifthsFourthsService = {
    getFifthOrFourth
}