/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  randomNoteOptions,
  sharpNotes,
  flatNotes,
  flatMajorScales,
  flatMinorScales,
  scalesSemitones,
  scaleOptions,
  scaleTypeOptions,
  harmonicFields 
} from './db';

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

export const api = {
  getMajorScale,
  getMinorScale,
  getRandomScale,
  getMajorHarmonicField,
  getMinorHarmonicField,
  getRandomHarmonicField
}