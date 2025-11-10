// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState, useEffect } from "react";
// import { ResultStatusType } from "antd/es/result";
// import { ScaleService } from "./scales.service";
// import Question from "../../components/Question/Question";

// interface scale {
//   key: string;
//   scaleType: string;
//   scale: string[]
// }

// export default function Scales(){
//     const [scale, setScale] = useState<scale>({
//       key: "",
//       scaleType: "",
//       scale: []
//     })
//     const [wrongCounter, setWrongCounter] = useState(0);
//     const [correctCounter, setCorrectCounter] = useState(0);
//     const [questionCounter, setQuestionCounter] = useState(1);
//     const [questionTitle, setQuestionTitle ] = useState<string>("");
//     const [showResult, setShowResult] = useState<boolean>(false);
//     const [result, setResult] = useState<ResultStatusType>();
//     const [correctAnswerResult, setCorrectAnswerResult] = useState<string>("");
//     const [guessResult, setGuessResult] = useState<string>("");

//     const handleCorrectAnswer = () => {
//       setResult("success");
//       setShowResult(true);
//       setCorrectCounter(correctCounter + 1);
//     }

//     const handleWrongAnswer = (guess: string, answer: string[]) => {
//       setResult("error");
//       setGuessResult(guess);
//       setCorrectAnswerResult(answer.join(" "));
//       setShowResult(true);
//       setWrongCounter(wrongCounter + 1);
//     };
 
//     const handleResult = (guess: string) => {
//       const formattedGuess = guess.replace(/\s/g,'').toLowerCase();
//       const answer = scale.scale;
//       const formattedAnswer = answer.join("").toLowerCase();

//       formattedGuess === formattedAnswer
//         ? handleCorrectAnswer()
//         : handleWrongAnswer(guess, answer);

//       setQuestionCounter(questionCounter+1);
//     }

//     useEffect(() => {
//       const generatedScale = ScaleService.getRandomScale();
//       setScale(generatedScale);
//       setQuestionTitle(`Qual é a escala de ${generatedScale.key} ${generatedScale.scaleType == "major" ? "maior" : "menor"}?`);
//     }, [questionCounter]);

//     return (
//       <Question
//         questionTitle={questionTitle}
//         questionCounter={questionCounter}
//         correctCounter={correctCounter}
//         wrongCounter={wrongCounter}
//         showResult={showResult}
//         result={result}
//         correctAnswerResult={correctAnswerResult}
//         guessResult={guessResult}
//         setShowResult={setShowResult}
//         handleResult={handleResult}
//       />
//     );
// }