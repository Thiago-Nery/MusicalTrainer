import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { bassClefService } from "./bassClef.service"

export default function BassClef(){
  const generateQuestion = () => {
    const {staffNote, staffNoteImagePath} = bassClefService.getRandomNote()
    const generatedQuestion: question = {
      title: 'Qual o nome dessa nota na clave de Fá?',
      correctAnswer: staffNote,
      questionImage: staffNoteImagePath
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
