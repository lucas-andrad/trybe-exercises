const sum = require('./exercise1.js')

describe('Testando se as funções passadas estão implementadas corretamente', () => {
    it('Testando se as funções de soma estão sendo implementadas corretamente', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    })
})