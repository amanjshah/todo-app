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

    return (
        <>
            <span className='totalCount'>{state}</span>
            <CounterButton buttonIncrement={1} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
            <CounterButton buttonIncrement={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
            <CounterButton buttonIncrement={3} incrementMethod={incrementCounter} decrementMethod={decrementCounter}></CounterButton>
        </>
    )
}


Counter.propTypes = {
    increment: PropTypes.number
}