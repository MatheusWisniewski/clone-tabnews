import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
  font-family: 'Arial', sans-serif;
`;

const Word = styled.span`
  margin: 0 10px;
  font-weight: bold;
  display: inline-block;
`;

const PinkPulse = styled(Word)`
  font-size: 3em;
  color: #ff4081;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  `} 2s ease-in-out infinite;
`;

const RotatingBlue = styled(Word)`
  font-size: 4em;
  color: #3f51b5;
  background: linear-gradient(to right, #64b5f6, #3f51b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 5s linear infinite;
`;

const UnderscoreYellow = styled(Word)`
  font-size: 2.5em;
  color: #ffc107;
  border-bottom: 3px dashed #ff9800;
  animation: ${keyframes`
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  `} 1.5s ease-in-out infinite;
`;

const WavyGreen = styled(Word)`
  font-size: 3.5em;
  color: #4caf50;
  text-decoration: underline wavy #2e7d32;
  animation: ${keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `} 2.5s ease-in-out infinite;
`;

const Message = () => {
  return (
    <Container>
      <PinkPulse>Oi</PinkPulse>
      <RotatingBlue>amor</RotatingBlue>
      <UnderscoreYellow>te</UnderscoreYellow>
      <WavyGreen>amo</WavyGreen>
    </Container>
  );
};

export default Message;