import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { TetradsService } from "./tetrads.service";

export default function Tetrads() {
  const generateQuestion = () => {
    const { keyWithType, tetrad } = TetradsService.getRandomTetrad();
    const correctAnswer = tetrad;
    const generatedQuestion: question = {
      title: `Qual é a Tétrade de ${keyWithType}?`,
      correctAnswer: correctAnswer
    };

    return generatedQuestion;
  }

  return <Question generateQuestion={generateQuestion} />;
}
