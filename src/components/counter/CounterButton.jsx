import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({buttonIncrement, incrementMethod, decrementMethod}) {
    
    return (
        <div className = 'counter'>
            <div>
                <button className='counterButton' onClick={() => incrementMethod(buttonIncrement)}>
                    +{buttonIncrement}
                </button>
                <button className='counterButton' onClick={() => decrementMethod(buttonIncrement)}>
                    -{buttonIncrement}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    increment: PropTypes.number
}