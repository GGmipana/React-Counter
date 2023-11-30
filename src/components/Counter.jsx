import '../styles/app.css';
import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2 className='counter-sub-title'>¡Haz clic para ir aumentando el número!</h2>

            <div className='number-container'>
                <p>{count}</p>
            </div>
            <div className='button-container'>
                <button className='counter-button' onClick={() => setCount(count + 1)}>
                    <span className='sum'>+</span>
                </button>
                <button className='counter-button'>
                    <span className='substract' onClick={() => setCount(count - 1)}>-</span>
                </button>
            </div>

        </>
    );
}
export default Counter;