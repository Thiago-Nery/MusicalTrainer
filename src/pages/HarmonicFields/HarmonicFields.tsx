import Question from "../../components/Question/Question";
import question from "../../components/Question/models/question.model";
import { HarmonicFieldsService } from "./hamonicFields.service";

export default function HarmonicFields() {
  const generateQuestion = () => {
    const generatedHarmonicField = HarmonicFieldsService.getRandomHarmonicField();
    const {keyNote, harmonicField} = generatedHarmonicField;
    const harmonicFieldType = generatedHarmonicField.harmonicFieldType == "major" ? "maior" : "menor"; 
    const correctAnswer = harmonicField;
    const generatedQuestion: question = {
      title: `Qual é o campo harmônico de ${keyNote} ${harmonicFieldType}?`,
      correctAnswer: correctAnswer
    };

    return generatedQuestion;
  }

  return <Question generateQuestion={generateQuestion} />;
}
