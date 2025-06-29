import QuestionForm from "./QuestionForm/QuestionForm";
import QuestionResult from "./QuestionResult/Result";
import question from "../../components/Question/models/question.model";
import Score from "./Score/Score";
import { ResultStatusType } from "antd/es/result";
import "./Question.css"
import { useEffect, useState } from "react";

interface QuestionProps {
  generateQuestion: () => question;
}

export default function QuestionTeste({ generateQuestion }: QuestionProps) {
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionImage, setQuestionImage] = useState("")
  const [wrongCounter, setWrongCounter] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<ResultStatusType>();
  const [correctAnswerResult, setCorrectAnswerResult] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
  const [guessResult, setGuessResult] = useState<string>("");

  const handleCorrectAnswer = () => {
    setResult("success");
    setShowResult(true);  
    setCorrectCounter(correctCounter + 1);
  };

  const handleWrongAnswer = (guess: string, answer: string) => {
    setResult("error");
    setGuessResult(guess);
    setCorrectAnswerResult(answer);
    setShowResult(true);
    setWrongCounter(wrongCounter + 1);
  };

  const handleResult = (guess: string) => {
    const formattedGuess = guess.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = correctAnswer.join("").toLowerCase()

    formattedGuess === formattedCorrectAnswer
      ? handleCorrectAnswer()
      : handleWrongAnswer(guess, correctAnswer.join(" "));

    setQuestionCounter(questionCounter + 1);
  };

  const onFinish = ({ guess }: { guess: string }) => {
    handleResult(guess);
  };

  useEffect(() => {
    const generatedQuestion = generateQuestion();
    setQuestionTitle(generatedQuestion.title)
    setCorrectAnswer(generatedQuestion.correctAnswer)
    if(generatedQuestion.questionImage){
      setQuestionImage(generatedQuestion.questionImage)
    }
  }, [questionCounter])

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
          <QuestionForm questionTitle={questionTitle} onFinish={onFinish} questionImage={questionImage}/>
        </>
      )}
    </>
  );
}
