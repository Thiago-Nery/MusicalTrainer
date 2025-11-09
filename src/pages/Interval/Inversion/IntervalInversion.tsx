/* eslint-disable @typescript-eslint/no-unused-vars */
import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { IntervalInversionService } from "./intervalInversion.service";

export default function IntervalInversion() {
  const generateQuestion = () => {
    const generatedIntervalInversion = IntervalInversionService.getRandomIntervalInversion();
    const { randomInterval, randomIntervalInversion } = generatedIntervalInversion;
    const correctAnswer = [randomIntervalInversion];
    console.log(correctAnswer.join(""))
    const generatedQuestion: question = {
      title: `Qual é a inversão do intervalo ${randomInterval} ?`,
      correctAnswer: correctAnswer,
      correctIfIncludes: true
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
