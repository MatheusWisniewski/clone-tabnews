import React from "react";
import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow words to wrap onto new lines
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Use min-height to ensure it fills the viewport
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  font-family: "Verdana", sans-serif;
  padding: 20px; // Add padding for better spacing on mobile

  @media (max-width: 600px) {
    flex-direction: column; // Stack words vertically on small screens
    align-items: center;
  }
`;

const StyledWord = styled.span`
  margin: 10px 15px; // Increase vertical margin for better spacing
  font-weight: bold;
  display: inline-block;
  text-align: center; // Center text within each word

  @media (max-width: 600px) {
    margin: 10px 0; // Adjust margin for vertical stacking
  }
`;

const StyleOne = styled(StyledWord)`
  font-family: "Courier New", monospace;
  font-size: 2.8em;
  color: #ff6f61;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${keyframes`
    0% { transform: skewX(0deg); }
    50% { transform: skewX(-5deg); }
    100% { transform: skewX(0deg); }
  `} 2.3s linear infinite;
`;

const StyleTwo = styled(StyledWord)`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 3.5em;
  color: #673ab7;
  background: radial-gradient(circle, #9575cd, #673ab7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${keyframes`
    0% { transform: scale(1) rotateY(0deg); }
    50% { transform: scale(1.1) rotateY(180deg); }
    100% { transform: scale(1) rotateY(360deg); }
  `} 3.8s ease-in-out infinite;
`;

const StyleThree = styled(StyledWord)`
  font-family: "Montserrat", sans-serif;
  font-size: 2.4em;
  color: #8bc34a;
  border-bottom: 3px dashed #aed581;
  text-transform: uppercase;
  animation: ${keyframes`
    0% { letter-spacing: 1px; }
    50% { letter-spacing: 3px; }
    100% { letter-spacing: 1px; }
  `} 2s ease-in-out infinite;
`;

const StyleFour = styled(StyledWord)`
  font-family: "Playfair Display", serif;
  font-size: 3.2em;
  color: #3f51b5;
  text-decoration: underline wavy #5c6bc0;
  font-style: italic;
  animation: ${keyframes`
    0% { opacity: 1; text-shadow: none; }
    50% { opacity: 0.8; text-shadow: 1px 1px 2px #5c6bc0; }
    100% { opacity: 1; text-shadow: none; }
  `} 2.6s ease-in-out infinite;
`;

const StyleFive = styled(StyledWord)`
  font-family: "Oswald", sans-serif;
  font-size: 3em;
  color: #ffc107;
  letter-spacing: 3px;
  font-weight: 700;
  animation: ${keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); text-shadow: 1px 1px 2px #ffeb3b; }
    100% { transform: translateY(0); }
  `} 2.8s ease-in-out infinite;
`;

const StyleSix = styled(StyledWord)`
  font-family: "Lobster", cursive;
  font-size: 3.6em;
  color: #f5f5f5;
  border-radius: 8px;
  background: linear-gradient(to right, #d32f2f, #f44336);
  padding: 8px 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  animation: ${keyframes`
    0% { box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3); }
    50% { box-shadow: 0 8px 16px rgba(244, 67, 54, 0.6); }
    100% { box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3); }
  `} 3.2s ease-in-out infinite;
`;

const Message = () => {
  return (
    <MainContainer>
      <StyleOne>Parabéns</StyleOne>
      <StyleTwo>você</StyleTwo>
      <StyleThree>caiu</StyleThree>
      <StyleFour>num</StyleFour>
      <StyleFive>GOLPE</StyleFive>
      <StyleSix>(brinks)</StyleSix>
    </MainContainer>
  );
};

export default Message;
