import QuestionForm from "./QuestionForm/QuestionForm";
import QuestionResult from "./QuestionResult/Result";
import Score from "./Score/Score";
import { ResultStatusType } from "antd/es/result";
import "./Question.css"

interface QuestionProps {
  questionTitle: string;
  showResult: boolean;
  result: ResultStatusType | undefined;
  correctAnswerResult: string;
  guessResult: string;
  setShowResult: (bool: boolean) => void;
  questionCounter: number;
  correctCounter: number;
  wrongCounter: number;
  handleResult: (param: string) => void;
}

export default function Question({
  questionTitle,
  questionCounter,
  correctCounter,
  wrongCounter,
  showResult,
  result,
  correctAnswerResult,
  guessResult,
  setShowResult,
  handleResult
}: QuestionProps) {

  // const handleResult = (guess: string) => {

  // }

  const onFinish = ({ guess }: { guess: string }) => {
    handleResult(guess);
    // verificar se resposta está certa 
    // resposta vem do componente pai
  };

  return (
    <>
      {showResult ? (
        <QuestionResult
          result={result}
          correctAnswerResult={correctAnswerResult}
          guessResult={guessResult}
          setShowResult={setShowResult}
          showResult={showResult}
        />
      ) : (
        <>
          <Score
            questionCounter={questionCounter}
            correctCounter={correctCounter}
            wrongCounter={wrongCounter}
          />
          <QuestionForm questionTitle={questionTitle} onFinish={onFinish} />
        </>
      )}
    </>
  );
}
