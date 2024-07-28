import Question from "../../components/Question/Question";
import question from "../../components/Question/models/question.model";
import { RelativeChordsService } from "./relativeChords.service";

export default function RelativeChords(){
  const generateQuestion = () => {
    const {tonic, relative} = RelativeChordsService.getRandomRelativeChords();
    const generatedQuestion: question = {
      title: `Qual é o acorde relativo de ${tonic} ?`,
      correctAnswer: relative,
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
