import wordBank from './word-bank.json';

export const getRandomWord = function() {
    const randomIndex = Math.floor(Math.random() * wordBank.valid.length);
    return wordBank.valid[randomIndex];
}

export enum LetterState {
    Miss,
    Present,
    Match,
}

export const computeGuess = function(guess: string, answer: string) {
    const result: LetterState[] = [];
    
    const guessLetters = guess.split('');
    const answerLetters = guess.split('');

    guessLetters.forEach((letter: string, index: number) => {
        if (letter === answerLetters[index]) {
            result.push(LetterState.Match)
        } else if (answerLetters.includes(letter)) {
            result.push(LetterState.Present)
        } else {
            result.push(LetterState.Miss)
        }
    })
}