import { useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState('0');

  const handleClick = (e) => {
    const value = e.target.value;
    setVal((prevVal) => {
      if (prevVal === '0') {
        return value === '0' ? '0' : value; // Prevent leading zeros
      }
      return prevVal + value;
    });
  };

  const handleOperatorClick = (e) => {
    const value = e.target.value;
    setVal((prevVal) => {
      if (['+', '-', '*', '/'].includes(prevVal.slice(-1))) {
        return prevVal.slice(0, -1) + value;
      }
      return prevVal + value;
    });
  };

  const calculateResult = () => {
    try {
      setVal(String(eval(val))); // Note: using eval for simplicity here
    } catch {
      setVal('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={val} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setVal('0')} />
            <input type="button" value="DE" onClick={() => setVal(val.slice(0, -1) || '0')} />
            <input type="button" value="." onClick={handleClick} />
            <input type="button" value="/" onClick={handleOperatorClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="*" onClick={handleOperatorClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="+" onClick={handleOperatorClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="-" onClick={handleOperatorClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="=" className="equal" onClick={calculateResult} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
