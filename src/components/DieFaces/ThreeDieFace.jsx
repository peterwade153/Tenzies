import PropTypes from 'prop-types';

const ThreeDieFace = (props) => {
    return (
        <div className="dice third-face" style={props.styles} onClick={props.holdDice}>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
        </div>
    )
}

ThreeDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default ThreeDieFace;
