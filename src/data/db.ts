export const randomNoteOptions = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A", "Bb","B"]
export const sharpNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
export const flatNotes = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]

export const flatMajorScales = ['F','Bb','Eb','Ab','Db','Gb']
export const flatMinorScales = ['D','G','C','F','Bb']

export const scalesSemitones: { [key: string]: number[] } = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
};

export const scaleOptions: {
  [key: string]: string[];
} = {
  major: flatNotes,
  minor: sharpNotes,
};

export const scaleTypeOptions: string[] = Object.keys(scalesSemitones)

export const harmonicFields: { [key: string]: string[] } = {
  major: ['','m','m','','','m','m7(b5)'],
  minor: ['m', 'm7(b5)', '', 'm', 'm', '', '']
};