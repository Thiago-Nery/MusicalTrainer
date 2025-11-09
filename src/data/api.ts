/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  allNotes,
  randomNoteOptions,
  sharpNotes,
  flatNotes,
  flatMajorScales,
  flatMinorScales,
  noteIntervalsName,
  intervalNames,
  intervalInversionQualityNames,
  allowedIntervalInversions,
  scalesSemitones,
  scaleOptions,
  scaleTypeOptions,
  harmonicFields
} from './db';
import { staffImages } from './Staff/staffMappedImages';

function getElementAt(index: number, arr: any[]){
  let inRangeIndex = index % arr.length
  return arr[inRangeIndex]
}

function getNewArrayFromElement(element: any, arr: any[]){
    const elementIndex = arr.indexOf(element)
    let newArray = []

    let i
    for(i=0; i < arr.length; i++){
      let newElement = getElementAt(elementIndex + i, arr)
      newArray.push(newElement)
    }

    return newArray   
}

function getNewArrayFromIndex(index: number, arr: any[]){
    let newArray = []

    let i
    for(i=0; i < arr.length; i++){
      let newElement = getElementAt(index + i, arr)
      newArray.push(newElement)
    }

    return newArray   
}


function getRandomNote(){
  const randomNote = Math.floor(Math.random() * randomNoteOptions.length)

  return randomNote
}

function getRandomInterval(){
  const flatOrSharpNotes = Math.floor(Math.random() * 2)  == 0 ? flatNotes : sharpNotes;
  const randomRootNoteIndex = Math.floor(Math.random() * flatOrSharpNotes.length)
  const randomRootNote = flatOrSharpNotes[randomRootNoteIndex]
  const sortedNotes = getNewArrayFromIndex(randomRootNoteIndex, flatOrSharpNotes)
  const randomNoteIndex = Math.floor(Math.random() * (sortedNotes.length - 1)) + 1;
  const randomNote = sortedNotes[randomNoteIndex]
  const randomIntervalName = noteIntervalsName[`${randomNoteIndex}`]
  const regex = new RegExp(`[${Object.keys(intervalNames).join('')}]`, 'g');
  const randomIntervalNameFormatted = randomIntervalName.replace(regex, l => ` ${intervalNames[l]}`)
  return {
    randomRootNote,
    randomNote,
    randomIntervalNameFormatted
  }
}

function getRandomIntervalInversion(){
  const randomIntervalIndex = Math.floor(Math.random() * allowedIntervalInversions.length)
  const randomIntervalDegreeAndQuality = allowedIntervalInversions[randomIntervalIndex]
  const randomIntervalDegree = parseInt(randomIntervalDegreeAndQuality.charAt(0))
  const randomIntervalQuality = randomIntervalDegreeAndQuality.charAt(1)

  const intervalInversionDegree = 9 - randomIntervalDegree
  const intervalInversionQuality = intervalInversionQualityNames[`${randomIntervalQuality}`]

  const regex = new RegExp(`[${Object.keys(intervalNames).join('')}]`, 'g');
  const randomIntervalFormatted = randomIntervalDegreeAndQuality.replace(regex, l => ` ${intervalNames[l]}`)
  const randomIntervalInversionFormatted = `${intervalInversionDegree} ${intervalInversionQuality.replace(regex, l => `${intervalNames[l]}`)}`

  return {
    randomIntervalFormatted,
    randomIntervalInversionFormatted
  }
}

function getScale(note: string, scale: number[]){
  let notes = []
  if (flatMajorScales.includes(note) && scale == scalesSemitones.major|| flatMinorScales.includes(note) && scale == scalesSemitones.minor){
    notes = flatNotes;
  }
  else {
    notes = sharpNotes;
  }
  
  let index = notes.findIndex(x => x == note);
  const rtnScale: string[] = [];
  scale.map(n => {
    rtnScale.push(notes[index]);
    index = (index + n) % notes.length;
  })
  
  rtnScale[6] = note == "F#" && scale == scalesSemitones.major ? "E#" : rtnScale[6];
  rtnScale[1] = note == "D#" && scale == scalesSemitones.minor ? "E#" : rtnScale[1];
  rtnScale[3] = note == "Gb" ? "Cb" : rtnScale[3];

  return rtnScale;
}

function getRandomScaleObject(key: string, scaleType: string, scale: string[]) {
  return {
    key,
    scaleType,
    scale
  }
}

function getRandomScale(type?: string){
  if(type) {
    const notes = scaleOptions[type]
    const scale = scalesSemitones[type]
    const randomNoteIndex = Math.floor(Math.random() * notes.length);
    return getRandomScaleObject(notes[randomNoteIndex], type, getScale(notes[randomNoteIndex], scale))
  }
  else {
    const randomNoteIndex = Math.floor(Math.random() * randomNoteOptions.length);
    const note = randomNoteOptions[randomNoteIndex];
    const randomScaleTypeIndex = Math.floor(Math.random() * scaleTypeOptions.length);
    const randomScaleType = scaleTypeOptions[randomScaleTypeIndex];
    if(note.includes("#")) {
      if(note == "F#"){
        return getRandomScaleObject(note, randomScaleType, getScale(note, scalesSemitones[randomScaleType]));
      }
      else {
        return getRandomScaleObject(note, "minor", getMinorScale(note));
      }
    }
    else if (note.includes("b")) {
      if(note == "Bb"){
        return getRandomScaleObject(note, randomScaleType, getScale(note, scalesSemitones[randomScaleType]));
      }
      else {
        return  getRandomScaleObject(note, "major", getMajorScale(note));
      }
    }
    else {
      return getRandomScaleObject(note, randomScaleType, getScale(note, scalesSemitones[randomScaleType]));
    }
  }
}

function getHarmonicField(scale: string[], scaleType: string[]){
  const harmonicField = [];
  for(let i=0; i < scale.length; i++){
    harmonicField.push(scale[i] + scaleType[i]);
  }
  return harmonicField;
}

function getRandomHarmonicFieldObject(keyNote: string,key: string, harmonicFieldType: string, harmonicField: string[]){
  return {
    keyNote,
    key,
    harmonicFieldType,
    harmonicField
  }
}

function getRandomHarmonicField(type?: string){
  if(type){
    const scale = getRandomScale(type);
    const harmonicField = getHarmonicField(scale.scale, harmonicFields[type]);
    return getRandomHarmonicFieldObject(scale.scale[0], harmonicField[0], scale.scaleType, harmonicField)
  }
  else {
    const scale = getRandomScale();
    const harmonicField = getHarmonicField(scale.scale, harmonicFields[scale.scaleType])
    return getRandomHarmonicFieldObject(scale.scale[0], harmonicField[0], scale.scaleType, harmonicField)
  }
}

const getMajorScale = (note: string) => getScale(note, scalesSemitones.major) 
const getMinorScale = (note: string) => getScale(note, scalesSemitones.minor) 
const getMajorHarmonicField = (note: string) => getHarmonicField(getMajorScale(note), harmonicFields.major) 
const getMinorHarmonicField = (note: string) => getHarmonicField(getMinorScale(note), harmonicFields.minor) 

const trebleClefNotes: {[key:string]: string[]} = {
  do: [staffImages["-2-linha.png"], staffImages["2-espaco.png"], staffImages["6-linha.png"]],
  si: [staffImages["-1-espaco.png"], staffImages["3-linha.png"], staffImages["6-espaco.png"]],
  la: [staffImages["-1-linha.png"], staffImages["3-espaco.png"], staffImages["7-linha.png"]],
  sol: [staffImages["0-espaco.png"], staffImages["4-linha.png"]],
  fa: [staffImages["1-linha.png"], staffImages["4-espaco.png"]],
  mi: [staffImages["1-espaco.png"], staffImages["5-linha.png"]],
  re: [staffImages["2-linha.png"], staffImages["5-espaco.png"]]
}

const bassClefNotes: {[key:string]: string[]} = {
  mi: [staffImages["-2-linha.png"], staffImages["2-espaco.png"], staffImages["6-linha.png"]],
  re: [staffImages["-1-espaco.png"], staffImages["3-linha.png"], staffImages["6-espaco.png"]],
  do: [staffImages["-1-linha.png"], staffImages["3-espaco.png"], staffImages["7-linha.png"]],
  si: [staffImages["0-espaco.png"], staffImages["4-linha.png"]],
  la: [staffImages["1-linha.png"], staffImages["4-espaco.png"]],
  sol: [staffImages["1-espaco.png"], staffImages["5-linha.png"]],
  fa: [staffImages["2-linha.png"], staffImages["5-espaco.png"]]
}

function getRandomStaffNote(clef: "treble" | "bass" = "treble") {
  const staffNotes = clef == "treble" ? trebleClefNotes : bassClefNotes
  const staffNotesNames = Object.keys(staffNotes) 
  const staffNoteIndex = Math.floor(Math.random() * staffNotesNames.length)
  const staffNote = staffNotesNames[staffNoteIndex]
  let staffNoteImagePath = staffNotes[`${staffNote}`][Math.floor(Math.random() * staffNotes[`${staffNote}`].length)];

  return {
    staffNote,
    staffNoteImagePath
  }
}

export const api = {
  getRandomInterval,
  getRandomIntervalInversion,
  getMajorScale,
  getMinorScale,
  getRandomScale,
  getMajorHarmonicField,
  getMinorHarmonicField,
  getRandomHarmonicField,
  getRandomStaffNote
}