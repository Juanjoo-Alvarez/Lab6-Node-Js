import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

function App() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
    if (value === 'C') {
       
        setInput('');
    } else if (value === '⌫') {
        
        setInput(input.slice(0, -1));
    } else if (value === '=') {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    } else {
        
        setInput(input + value);
    }
};

    return (
        <div className="calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}

export default App;