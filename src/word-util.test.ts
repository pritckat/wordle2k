import {describe, expect, it} from 'vitest';
import {getRandomWord} from './word-util'
import { render, screen } from '@testing-library/react';

describe('word-utils', () => {
    it('random word', () => {
        expect(getRandomWord()).toBeTruthy()
    })
})