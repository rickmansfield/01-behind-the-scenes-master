import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  console.log('APP RUNNING');
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => { 
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/*if showParagraph is true, the "&&" is shorthand to render the paragraph <p>*/}
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput showParagraph={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle  Paragraph</Button>
    </div>
  );
}

export default App;
