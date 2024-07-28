import Question from "../../components/Question/Question";
import question from "../../components/Question/models/question.model";
import { CircleOfFifthsFourthsService } from "./circleOfFifthsFourths.service";

export default function HarmonicFields() {
  const generateQuestion = () => {
    const { key, randomDegree } = CircleOfFifthsFourthsService.getFifthOrFourth();
    let { note, degreeName } = randomDegree
    degreeName =  degreeName == 'fourth' ? '4ª Justa' : '5ª Justa'
    const correctAnswer = [note];
    const generatedQuestion: question = {
      title: `Qual é a ${degreeName} de ${key}?`,
      correctAnswer: correctAnswer
    }

    return generatedQuestion;
  }

  return <Question generateQuestion={generateQuestion} />;
}
