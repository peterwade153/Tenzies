import { describe, expect, it , vi } from 'vitest'
import { generateNewDice, newDiceArray } from '../generateDice/generateDice'

const dice = {
    value: 3,
    isHeld: false,
    id: '123456'
}
const diceArray = new Array(10).fill(dice, 0, 10)

vi.mock('../generateDice/generateDice', () =>{
    const generateNewDice = vi.fn(() => dice)
    const newDiceArray = vi.fn(() => diceArray)
    return { generateNewDice, newDiceArray }
})

describe("generate new dice", () => {
    it("returns dice object", ()=> {
        expect(generateNewDice()).toEqual({
            value: 3,
            isHeld: false,
            id: '123456'
        });
    })

    it("return dice array", ()=> {
        expect(newDiceArray()).toHaveLength(10)
    })
})
