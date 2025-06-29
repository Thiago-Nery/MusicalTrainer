import { api } from "../../../data/api";

const getRandomNote = () => {
    const {staffNote, staffNoteImagePath} = api.getRandomStaffNote("bass") 
    return {
        staffNote: [staffNote],
        staffNoteImagePath
    }
}

export const bassClefService = {
    getRandomNote
}