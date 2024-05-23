import Question from "../../components/Question/Question";
import question from "../../components/Question/models/question.model";

export default function RelativeChords(){
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
