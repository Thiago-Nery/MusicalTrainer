export const allNotes = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A", "A#", "Bb","B"]
export const randomNoteOptions = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A", "Bb","B"]
export const sharpNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
export const flatNotes = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]

export const flatMajorScales = ['F','Bb','Eb','Ab','Db','Gb']
export const flatMinorScales = ['D','G','C','F','Bb']

export const noteIntervalsName : { [key: number]: string } = {
  1: "1A ou 2m",
  2: "2M",
  3: "2A ou 3m",
  4: "3M",
  5: "4J",
  6: "4A ou 5D",
  7: "5J",
  8: "5A ou 6m",
  9: "6M",
  10: "7m ou 6A",
  11: "7M"
}

export const intervalNames : { [key: string]: string }= {
  M: "maior",
  m: "menor",
  J: "justa",
  D: "diminuta",
  A: "aumentada"
}

export const intervalInversionQualityNames : { [key: string]: string } = {
  M: "m",
  m: "M",
  J: "J",
  A: "D",
  D: "A"
}

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