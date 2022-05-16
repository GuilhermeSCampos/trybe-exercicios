const {encode, decode} = require('./encodeDecode');

test('encode é um funcao', () => {
    expect(typeof encode).toEqual('function');
})

test('dencode é um funcao', () => {
    expect(typeof decode).toEqual('function');
})

test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
})

test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
    expect(decode("12345")).toBe("aeiou");
})

test('Teste se as demais letras não são convertidos para cada caso;', () => {
    expect(encode("qwrtypsdfghjklçzxcvbnm")).toBe("qwrtypsdfghjklçzxcvbnm");
})

test('Teste se os demais numeros não são convertidos para cada caso;', () => {
    expect(decode("6789")).toBe("6789");
})

test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode("qwrtypsdfghjklçzxcvbnm").length).toEqual(22);
})
