import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({buttonIncrement, incrementMethod, decrementMethod}) {
    
    function incrementCounter() {
        incrementMethod(buttonIncrement)
    }

    function decrementCounter() {
        decrementMethod(buttonIncrement)
    }

    return (
        <div className = 'counter'>
            <div>
                <button className='counterButton' onClick={incrementCounter}>
                    +{buttonIncrement}
                </button>
                <button className='counterButton' onClick={decrementCounter}>
                    -{buttonIncrement}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    increment: PropTypes.number
}