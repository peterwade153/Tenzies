import PropTypes from 'prop-types';

import OneDieFace from './DieFaces/OneDieFace';
import TwoDieFace from './DieFaces/TwoDieFace';
import ThreeDieFace from './DieFaces/ThreeDieFace';
import FourDieFace from './DieFaces/FourDieFace';
import FiveDieFace from './DieFaces/FiveDieFace';
import SixDieFace from './DieFaces/SixDieFace';

const Dice = (props) => {
    // Render a Die face with a number of dots based on the die value passed via props
    // The value is a figure between 1 - 6
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "#0B2434"
    }

    switch (props.value) {
        case 1:
            return <OneDieFace {...props} styles={styles}/>;
        case 2:
            return <TwoDieFace {...props} styles={styles}/>;
        case 3:
            return <ThreeDieFace {...props} styles={styles}/>;
        case 4:
            return <FourDieFace {...props} styles={styles}/>;
        case 5:
            return <FiveDieFace {...props} styles={styles}/>;
        case 6:
            return <SixDieFace {...props} styles={styles}/>;
        default:
            return '';
    }
}

Dice.propTypes = {
    isHeld: PropTypes.bool,
    value: PropTypes.number,
    holdDice: PropTypes.func
}

export default Dice;
