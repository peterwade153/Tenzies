import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import SixDieFace from '../components/DieFaces/SixDieFace';

describe('Six Die face renders correctly', () => {
    it('displays six dots', () => {
        const holdDice = vi.fn()
        const { container } = render(<SixDieFace holdDice={holdDice} />)
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(6);
    })
})
