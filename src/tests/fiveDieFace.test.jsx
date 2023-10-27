import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import FiveDieFace from '../components/DieFaces/FiveDieFace';

describe('Five Die face renders correctly', () => {
    it('displays five dots', () => {
        const holdDice = vi.fn()
        const { container } = render(<FiveDieFace holdDice={holdDice} />)
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(5);
    })
})
