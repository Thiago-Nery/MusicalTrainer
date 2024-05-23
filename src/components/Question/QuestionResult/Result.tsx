// import { useState } from "react";
import { Result, Button } from "antd";
import { ResultStatusType } from "antd/es/result";
import "./Result.css"

interface QuestionResultProps {
  result: ResultStatusType | undefined;
  correctAnswerResult: string;
  guessResult: string;
  showResult: boolean;
  setShowResult: (bool: boolean) => void
}

export default function QuestionResult({result, correctAnswerResult, guessResult, showResult, setShowResult}: QuestionResultProps){

  const handleCloseResult = () => {
    setShowResult(false)
  }

  if(showResult && result == "success") {
    setTimeout(() => {
      handleCloseResult()
    }, 1100);
  }

  return result == "success" ? (
    <Result
      className="correct-result"
      status={result}
      title="Correto"
      subTitle={"Continue assim!"}
    />
  ) : (
    <Result
      status={result}
      title="Errado"
      subTitle={
        <>
          Sua Resposta:
          <br />
          <b>{guessResult}</b>
          <br />
          Resposta Correta:
          <br />
          <b>{correctAnswerResult}</b>
        </>
      }
      extra={[
        <Button type="primary" key="continue" autoFocus onClick={handleCloseResult}>
          Continuar
        </Button>,
      ]}
    />
  );
}