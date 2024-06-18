function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char
    }).join('');
}

function encrypt() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    const result = caesarCipher(text, shift);
    document.getElementById('result').textContent = `Encrypted: ${result}`;
}

function decrypt() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    const result = caesarCipher(text, -shift);
    document.getElementById('result').textContent = `Decrypted: ${result}`;
}