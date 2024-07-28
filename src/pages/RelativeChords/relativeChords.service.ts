import { api } from "../../data/api";

const getRandomRelativeChords = (type?: string) => {
    const { harmonicFieldType, harmonicField, key } = api.getRandomHarmonicField(type) 
    return {
        tonic: key,
        relative: harmonicFieldType == 'major' ? [harmonicField[5]] : [harmonicField[2]] 
    }
}

export const RelativeChordsService = {
    getRandomRelativeChords
}