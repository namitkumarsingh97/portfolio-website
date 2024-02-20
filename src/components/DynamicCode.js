import React from "react";
import { LiveProvider, LiveEditor } from "react-live";
import styled, { keyframes } from "styled-components";

const CodeContainer = styled.div`
  background-color: #000;
  padding: 2rem;
  border-radius: 8px;
  width: 48%;
  box-sizing: border-box;
  overflow: auto;
  color: #00ff00; /* Green text */
`;

const cursorBlink = keyframes`
  0%, 100% {
    border-right: 2px solid #00ff00;
  }
  50% {
    border-right: 2px solid transparent;
  }
`;

const LiveEditorStyled = styled(LiveEditor)`
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  color: #00ff00;
  white-space: pre-wrap;
  overflow: auto;
  border-right: 2px solid #00ff00;
  animation: ${cursorBlink} 1s step-end infinite;
`;

const codeExample = `
function MyComponent() {
  return (
    <div>
      <p>This is the Contact Section for my Portfolio</p>
    </div>
  );
}

ReactDOM.render(<MyComponent />, mountNode);
`;

const DynamicCode = () => {
  return (
    <CodeContainer>
      <LiveProvider code={codeExample}>
        <LiveEditorStyled />
      </LiveProvider>
    </CodeContainer>
  );
};

export default DynamicCode;
