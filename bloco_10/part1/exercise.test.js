const { it, expect } = require('@jest/globals');
const sum = require('./exercise1.js');
const myRemove = require('./exercise2.js');
const myRemoveWithoutCopy = require('./exercise3.js');
const myFizzBuzz = require('./exercise4.js');
const obj1 = require('./exercise5.js');

describe('Testando se as funções passadas estão implementadas corretamente', () => {
  it('Testando se as funções de soma estão sendo implementadas corretamente', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Testando se as funções de retornar uma cópia sem um item específico do array estão funcionando corretamente', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Testando se as funções de remover um item específico do array estão funcionando corretamente', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Testando se as funções de retornar palavras de acordo com os números recebidos estão funcionando corretamente', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(17)).toBe(17);
    expect(myFizzBuzz('10')).toBe(false);
  });
  it('Testando se os objetos do exercício 5 são iguais', () => {
    expect(obj1).toEqual({
      title: 'My Title',
      description: 'My Description',
    });
  });
});
