import PropTypes from 'prop-types';

const SixDieFace = (props) => {
    return (
        <div className="dice sixth-face" style={props.styles} onClick={props.holdDice}>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        </div>
    )
}

SixDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default SixDieFace;
