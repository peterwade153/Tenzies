import PropTypes from 'prop-types';

const OneDieFace = (props) => {
    return (
        <div className="dice first-face" style={props.styles} onClick={props.holdDice}>
            <span className="dot"> </span>
        </div>
    )
}

OneDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default OneDieFace;
