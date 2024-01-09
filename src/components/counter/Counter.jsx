import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {
    const [state, setState] = useState(0)

    function incrementCounter(increment) {
        setState(state + increment)
    }

    function decrementCounter(increment) {
        setState(state - increment)
    }

    function resetState() {
        setState(0)
    }

    return (
        <>
            <CounterButton buttonIncrement={1} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
            <CounterButton buttonIncrement={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
            <CounterButton buttonIncrement={3} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
            <span className='totalCount'>{state}</span>
            <button className='resetButton' onClick={resetState}>Reset</button>
        </>
    )
}


Counter.propTypes = {
    increment: PropTypes.number
}