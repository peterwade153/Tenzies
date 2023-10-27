import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import Dice  from '../components/Dice'

const dice = {
    value: 3,
    isHeld: false,
    id: '123456'
}

describe('handles dice hold', () => {
    it('should call holdDice on click', () => {
        const isHeld = vi.fn();
        const {container} = render(<Dice {...dice} holdDice={isHeld}/>)
        const die = container.querySelector('div');
        fireEvent.click(die)
        expect(isHeld).toHaveBeenCalledOnce();
    })
})
