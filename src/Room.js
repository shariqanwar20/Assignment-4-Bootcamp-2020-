import React, {useState} from 'react';
import './Room.css';

export default function Room()
{
    let [isLit, setLit] = useState(true);
    let [temp, setTemp] = useState(22);
    return(
        <div className={`room ${isLit ? 'lit' : 'dark'}`}>
            The room is {isLit ? 'lit' : 'dark'}
            <br />
            Current Temperature: {temp}
            <br /><br />
            <button onClick={() => setLit(!isLit)}>
                Flip
            </button>

            <button onClick={() => setLit(true)}>
                ON
            </button>

            <button onClick={() => setLit(false)}>
                OFF
            </button>
            <br /><br />
            <button onClick={() => setTemp(++temp)}>
                +
            </button>
            <button onClick={() => setTemp(--temp)}>
                -
            </button>

        </div>
    )
}