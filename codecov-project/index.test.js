const add = require('./index.js');

describe('add() adds two numbers', () => {
    it('are positive', () => {
        const [a, b] = [1, 2];
        const result = add(a, b);
        expect(result).toBe(3);
    })
})
