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
  font-size: 2.5em;
  color: #e91e63;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  animation: ${keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  `} 2s ease-in-out infinite;
`;

const StyleTwo = styled(StyledWord)`
  font-size: 3em;
  color: #2196f3;
  background: linear-gradient(to right, #64b5f6, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 4s linear infinite;
`;

const StyleThree = styled(StyledWord)`
  font-size: 2em;
  color: #ff9800;
  border-bottom: 2px dotted #ffc107;
  animation: ${keyframes`
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  `} 1.8s ease-in-out infinite;
`;

const StyleFour = styled(StyledWord)`
  font-size: 3.5em;
  color: #4caf50;
  text-decoration: underline double #2e7d32;
  animation: ${keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  `} 2.2s ease-in-out infinite;
`;

const StyleFive = styled(StyledWord)`
  font-size: 2.8em;
  color: #9c27b0;
  letter-spacing: 2px;
  animation: ${keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  `} 2.5s ease-in-out infinite;
`;

const StyleSix = styled(StyledWord)`
  font-size: 3.2em;
  color: #ffffff;
  border-radius: 5px;
  background: linear-gradient(to bottom, #00acc1, #00bcd4);
  padding: 5px 10px;
  animation: ${keyframes`
    0% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.5); }
    50% { box-shadow: 0 0 15px rgba(0, 188, 212, 0.8); }
    100% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.5); }
  `} 3s ease-in-out infinite;
`;

const Message = () => {
  return (
    <MainContainer>
      <StyleOne>Oi</StyleOne>
      <StyleTwo>família</StyleTwo>
      <StyleThree>tudo</StyleThree>
      <StyleFour>certo</StyleFour>
      <StyleFive>com</StyleFive>
      <StyleSix>vocês?</StyleSix>
    </MainContainer>
  );
};

export default Message;
