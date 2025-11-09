/* eslint-disable @typescript-eslint/no-unused-vars */
import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { IntervalClassificationService } from "./intervalClassification.service";

export default function IntervalClassification() {
  const generateQuestion = () => {
    const generatedInterval = IntervalClassificationService.getRandomInterval();
    const { randomRootNote, randomNote, randomIntervalNameFormatted } = generatedInterval;
    const correctAnswer = [randomIntervalNameFormatted];
    const generatedQuestion: question = {
      title: `Classifique o intervalo entre as notas ${randomRootNote} e ${randomNote}`,
      correctAnswer: correctAnswer,
      correctIfIncludes: true
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
