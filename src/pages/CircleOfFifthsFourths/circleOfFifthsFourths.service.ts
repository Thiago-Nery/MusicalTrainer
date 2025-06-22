import { api } from "../../data/api";

const getFifthOrFourth = (type?: string) =>{ 
    const { scale, key } = api.getRandomScale(type) 
    const fourthFifthDegree = [{
        note: scale[3],
        degreeName: "fourth"
    },{
        note: scale[4],
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