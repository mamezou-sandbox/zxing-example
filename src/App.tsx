import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useZxing } from 'react-zxing';

function App() {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    }
  });

  return (
    <div className="App">
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
}

export default App;
