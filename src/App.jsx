import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

import { generateNewDice, newDiceArray } from './generateDice/generateDice'
import Dice from './components/Dice'
import './App.css'


function App() {
  const [dice, setDice] = useState(newDiceArray())
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(dieFace => dieFace.isHeld)
    const allSameValue = dice.every(dieFace => dieFace.value == dice[0].value)
    if (allHeld && allSameValue) {
      setCompleted(true)
    }
  }, [dice])

  const holdDice = (id) => {
    setDice(prevDice => prevDice.map((item) => {
      return item.id == id ? {...item, isHeld: !item.isHeld} : item
    }))
  }

  const elements = dice.map((item, index) => {
    return (
      <Dice
        key={index}
        {...item}
        holdDice={() => holdDice(item.id)}
      />
    )
  })

  const rollDice = () => {
    if (!completed)  {
        setDice(prevDice => prevDice.map((item) => {
        return (item.isHeld) ? item : generateNewDice()
      }))
    } else {
      setCompleted(false)
      setDice(newDiceArray())
    }
  }

  return (
    <main className='main'>
      {completed && < Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Copy Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='die-elements'>
        {elements}
      </section>
      <button className='dice-btn' onClick={rollDice}>{completed ? 'New game' : 'Roll'}</button>
    </main>
  )
}

export default App
