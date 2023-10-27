import PropTypes from 'prop-types';

const FourDieFace = (props) => {
    return (
        <div className="dice forth-face" style={props.styles} onClick={props.holdDice}>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
            <div className="column">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        </div>
    )
}

FourDieFace.propTypes = {
    styles: PropTypes.object,
    holdDice: PropTypes.func
}

export default FourDieFace;
