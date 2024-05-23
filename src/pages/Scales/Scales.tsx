/* eslint-disable @typescript-eslint/no-unused-vars */
import Question from "../../components/Question/Question";
import question from "../../components/Question/models/question.model";
import { ScaleService } from "./scales.service";

export default function Scales() {
  const generateQuestion = () => {
    const generatedScale = ScaleService.getRandomScale();
    const { key, scale } = generatedScale;
    const scaleType = generatedScale.scaleType == "major" ? "maior" : "menor";
    const correctAnswer = scale;
    const generatedQuestion: question = {
      title: `Qual é a escala de ${key} ${scaleType}?`,
      correctAnswer: correctAnswer,
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
