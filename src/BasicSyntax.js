export function romanToInteger(str) {
    let result = 0;
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = str.length - 1; i >= 0; i--) {
        const current = values[str[i]];
        const previous = i < str.length - 1 ? values[str[i + 1]] : 0;

        if (current < previous) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}
