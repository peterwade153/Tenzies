import {nanoid} from "nanoid"


export const generateNewDice = () => {
    // Generate a dice object with 
    // Dice face alue between 0 - 6
    // isHeld property to indicate it has been selected (held)
    return ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    })
}

export const newDiceArray = () => {
    const newDiceArray = []
    for(let i=0; i < 10; i++) {
        newDiceArray.push(generateNewDice())
    }
    return newDiceArray
}
