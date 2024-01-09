import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    const [state, setState] = useState(0);
    
    function incrementCounter() {
        setState(state + 1)
        console.log('Incremented counter. ')
        console.log(state)
    }

    function decrementCounter() {
        setState(state - 1)
        console.log('Decremented counter. ')
        console.log(state)
    }

    return (
        <div className = 'Counter'>
            <span className = 'count'>{state}</span>
            <div>
                <button className='counterButton' onClick={incrementCounter}>
                    +1
                </button>
                <button className='counterButton' onClick={decrementCounter}>
                    -1
                </button>
            </div>
        </div>
    )
}