import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { TriadsService } from "./triads.service";

export default function Triads() {
  const generateQuestion = () => {
    const { keyWithType, triad } = TriadsService.getRandomTriad();
    const correctAnswer = triad;
    const generatedQuestion: question = {
      title: `Qual é a Tríade de ${keyWithType}?`,
      correctAnswer: correctAnswer
    };

    return generatedQuestion;
  }

  return <Question generateQuestion={generateQuestion} />;
}
