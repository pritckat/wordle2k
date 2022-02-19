import {describe, expect, it} from 'vitest';
import {getRandomWord, LetterState, computeGuess} from './word-util'
import { render, screen } from '@testing-library/react';

describe('getRandomWord', () => {
    it('random word', () => {
        expect(getRandomWord()).toBeTruthy()
    });
});

describe('computeGuess'), () => {
    it('works with match and present'), () => {
        expect(computeGuess('boost', 'basic')).toEqual([
            LetterState.Match,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Present,
            LetterState.Miss
        ])
    };
};