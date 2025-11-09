/* eslint-disable @typescript-eslint/no-unused-vars */
import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { IntervalInversionService } from "./intervalInversion.service";

export default function IntervalInversion() {
  const generateQuestion = () => {
    const generatedIntervalInversion = IntervalInversionService.getRandomIntervalInversion();
    const { randomIntervalFormatted, randomIntervalInversionFormatted } = generatedIntervalInversion;
    const correctAnswer = [randomIntervalInversionFormatted];
    console.log(correctAnswer.join(""))
    const generatedQuestion: question = {
      title: `Classifique a inversão do intervalo de ${randomIntervalFormatted}`,
      correctAnswer: correctAnswer,
      correctIfIncludes: true
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
