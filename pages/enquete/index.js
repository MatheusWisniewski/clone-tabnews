import React, { useState } from "react";
import styled from "styled-components";

const SurveyContainer = styled.div`
  font-family: sans-serif;
  text-align: left;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

const Question = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  font-weight: normal;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

function Survey() {
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleQuestion1Change = (event) => {
    setQuestion1(event.target.value);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2(event.target.value);
  };

  const handleSubmit = () => {
    if (question1 && question2) {
      setSubmitted(true);
    } else {
      alert("Por favor, responda a todas as perguntas.");
    }
  };

  return (
    <SurveyContainer>
      <h2>Pesquisa Simples</h2>

      <Question>
        <p>1. Quem é a pessoa mais legal da família?</p>
        <RadioGroup>
          <label>
            <input
              type="radio"
              value="muito satisfeito"
              checked={question1 === "muito satisfeito"}
              onChange={handleQuestion1Change}
            />
            Tati
          </label>
          <label>
            <input
              type="radio"
              value="satisfeito"
              checked={question1 === "satisfeito"}
              onChange={handleQuestion1Change}
            />
            Manu
          </label>
          <label>
            <input
              type="radio"
              value="neutro"
              checked={question1 === "neutro"}
              onChange={handleQuestion1Change}
            />
            Matheus
          </label>
          <label>
            <input
              type="radio"
              value="insatisfeito"
              checked={question1 === "insatisfeito"}
              onChange={handleQuestion1Change}
            />
            Marilena
          </label>
          <label>
            <input
              type="radio"
              value="paulo"
              checked={question1 === "paulo"}
              onChange={handleQuestion1Change}
            />
            Paulo
          </label>
        </RadioGroup>
      </Question>

      <Question>
        <p>2. Bundão...</p>
        <RadioGroup>
          <label>
            <input
              type="radio"
              value="muito provável"
              checked={question2 === "muito provável"}
              onChange={handleQuestion2Change}
            />
            fétido
          </label>
          <label>
            <input
              type="radio"
              value="provável"
              checked={question2 === "provável"}
              onChange={handleQuestion2Change}
            />
            limpo
          </label>
          <label>
            <input
              type="radio"
              value="neutro"
              checked={question2 === "neutro"}
              onChange={handleQuestion2Change}
            />
            neutro
          </label>
          <label>
            <input
              type="radio"
              value="improvável"
              checked={question2 === "improvável"}
              onChange={handleQuestion2Change}
            />
            achei ofensiva a pergunta
          </label>
        </RadioGroup>
      </Question>

      <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>

      {submitted && <Result>Obrigado(a) pelo seu feedback!</Result>}
    </SurveyContainer>
  );
}

export default Survey;
