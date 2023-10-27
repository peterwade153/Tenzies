import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import OneDieFace from '../components/DieFaces/OneDieFace';

describe('One Die face renders correctly', () => {
    it('displays one dot', () => {
        const holdDice = vi.fn()
        const { container } = render(<OneDieFace holdDice={holdDice} />)
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(1);
    })
})
