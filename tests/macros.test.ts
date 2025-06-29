import { Macros } from '../src/macros';

describe('testing macros code', () => {
    test('testing macros maths', () => {
        // create a new object
        let unit = new Macros(10.0, 10.0, 20.0);

        // we expect the calories to be 10 * 9 + 10 * 4 + 10 * 4
        let result = 10.0 * 9 + 10.0 * 4 + 20.0 * 4;

        // check the computation
        expect(unit.getCalories()).toBe(result);
    });
});