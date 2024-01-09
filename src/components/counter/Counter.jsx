import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter({increment}) {

    const [state, setState] = useState(0);
    
    function incrementCounter() {
        setState(state + increment)
        console.log('Incremented counter. ')
        console.log(state)
    }

    function decrementCounter() {
        setState(state - increment)
        console.log('Decremented counter. ')
        console.log(state)
    }

    return (
        <div className = 'Counter'>
            <span className = 'count'>{state}</span>
            <div>
                <button className='counterButton' onClick={incrementCounter}>
                    +{increment}
                </button>
                <button className='counterButton' onClick={decrementCounter}>
                    -{increment}
                </button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    increment: PropTypes.number
}