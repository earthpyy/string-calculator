import {add} from '../main'

describe('Test', () => {
  it('empty test', () => {
    const result = add('');
    expect(result).toEqual(0);
  });
  it('single test', () => {
    const result = add('1');
    expect(result).toEqual(1);
  });
  it('double test', () => {
    const result = add('1,2');
    expect(result).toEqual(3);
  });
  it('unknown', () => {
    const result = add('1,2,3,5');
    expect(result).toEqual(11);
  });
  it('new line', () => {
    const result = add('1\n2,3,5');
    expect(result).toEqual(11);
  });
  it('custom delimiter', () => {
    const result = add('//a\n2a3a5');
    expect(result).toEqual(10);
  });
});
