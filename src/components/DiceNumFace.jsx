import PropTypes from 'prop-types';  

const Die = (props) => {
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "#FFF"
    }
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

Die.propTypes = {
    isHeld: PropTypes.bool,
    value: PropTypes.number,
    holdDice: PropTypes.func
}

export default Die;
