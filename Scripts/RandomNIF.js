/**
  {
    "api":1,
    "name":"Random NIF",
    "description":"Random NIF (Spain DNI: Número de Identificación Fiscal)",
    "author":"Fran Velázquez",
    "icon":"type",
    "tags":"NIF,DNI"
  }
**/
// https://github.com/singuerinc/better-dni/blob/master/packages/better-dni/src/randomNIF.ts
function main(input) {

    // src: packages/better-dni/src/internal/_utils.ts
    function random(seed) {
        let _seed = seed % 2147483647;
        if (_seed <= 0) _seed += 2147483646;
        return {
            next: () => {
                _seed = (_seed * 16807) % 2147483647;
                return _seed;
            },
        };
    }

    // random :: https://gist.github.com/blixt/f17b47c62508be59987b#file-prng-js

    const _letter = (x) => "trwagmyfpdxbnjzsqvhlcke"[+x % 23];
    const _randStrLimit = (limit) => `${Math.random()}`.slice(-limit);
    const _randFloat = (seed) => (random(seed).next() - 1) / 2147483646;

    // src: packages/better-dni/src/randomNIF.ts
    const nn = _randStrLimit(8);
    const nif = nn + _letter(nn).toUpperCase();

    input.text = nif;
}
