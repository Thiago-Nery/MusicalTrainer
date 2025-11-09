import Question from "../../../components/Question/Question";
import question from "../../../components/Question/models/question.model";
import { trebleClefService } from "./trebleClef.service"

export default function TrebleClef(){
  const generateQuestion = () => {
    const {staffNote, staffNoteImagePath} = trebleClefService.getRandomNote()
    const generatedQuestion: question = {
      title: 'Qual o nome dessa nota na clave de Sol?',
      correctAnswer: staffNote,
      questionImage: staffNoteImagePath
    };

    return generatedQuestion;
  };

  return <Question generateQuestion={generateQuestion} />;
}
