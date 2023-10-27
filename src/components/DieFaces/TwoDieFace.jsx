import PropTypes from 'prop-types';

const TwoDieFace = (props) => {
    return (
        <div className="dice second-face" style={props.styles} onClick={props.holdDice}>
            <span className="dot"> </span>
            <span className="dot"> </span>
        </div>
    )
}

TwoDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default TwoDieFace;
