const lines = 5;
let result = '';

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }

    for (let j = 0; i < 2 * i + 1; j++) {
        result += '*';
    }

    result += '\n';
}