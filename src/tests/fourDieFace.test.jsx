import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import FourDieFace from '../components/DieFaces/FourDieFace';

describe('Four Die face renders correctly', () => {
    it('displays four dots', () => {
        const holdDice = vi.fn()
        const { container } = render(<FourDieFace holdDice={holdDice} />)
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(4);
    })
})
