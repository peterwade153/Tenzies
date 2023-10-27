import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import TwoDieFace from '../components/DieFaces/TwoDieFace';


describe('Two Die face renders correctly', () => {
    it('displays two dots', () => {
        const holdDice = vi.fn();
        const { container } = render(<TwoDieFace holdDice={holdDice} />);
        const dots = container.getElementsByClassName('dot');
        expect(dots.length).toBe(2);
    })
})
