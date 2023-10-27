import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'

import ThreeDieFace from '../components/DieFaces/ThreeDieFace';

describe('Three Die face renders correctly', () => {
    it('displays three dots', () => {
        const holdDice = vi.fn()
        const { container } = render(<ThreeDieFace holdDice={holdDice} />)
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(3);
    })
})
