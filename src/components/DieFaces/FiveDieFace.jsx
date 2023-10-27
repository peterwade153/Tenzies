import PropTypes from 'prop-types';

const FiveDieFace = (props) => {
    return (
        <div className="dice fifth-face" style={props.styles} onClick={props.holdDice}>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
            <span className="dot"> </span>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        </div>
    )
}

FiveDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default FiveDieFace;
