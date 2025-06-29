import { api } from "../../../data/api";

const getRandomNote = () => {
    const {staffNote, staffNoteImagePath} = api.getRandomStaffNote("treble") 
    return {
        staffNote: [staffNote],
        staffNoteImagePath
    }
}

export const trebleClefService = {
    getRandomNote
}