const charRange = document.getElementById('charRange')
const charNum = document.getElementById('charNum')
const form = document.getElementById('passgen')
const passText = document.getElementById('pass-text')

const uppercaseCheckboxELE = document.getElementById('upperCheckbox')
const numberCheckboxELE = document.getElementById('numCheckbox')
const symbolCheckboxELE = document.getElementById('symCheckbox')


const UPPER_CODES = genArray(65, 90)
const LOWER_CODES = genArray(97, 122)
const NUM_CODES = genArray(48, 57)
const SYM_CODES = genArray(33, 47).concat(
    genArray(58, 63)
).concat(
    genArray(96, 125)
)


form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmount = charNum.value
    const inUpper = uppercaseCheckboxELE.checked
    const inNum = numberCheckboxELE.checked
    const inSym = symbolCheckboxELE.checked
    const pass = genPass(charAmount, inUpper, inNum, inSym)
    passText.innerText = pass
})

charRange.addEventListener('input', syncValue)
charNum.addEventListener('input', syncValue)

function syncValue(e) {
    const val = e.target.value
    charNum.value = val
    charRange.value = val
}

function genPass(_charAmount, _inUpper, _inNum, _inSym) {
    let CHAR_CODES = LOWER_CODES
    if (_inUpper) CHAR_CODES = CHAR_CODES.concat(UPPER_CODES)
    if (_inNum) CHAR_CODES = CHAR_CODES.concat(NUM_CODES)
    if (_inSym) CHAR_CODES = CHAR_CODES.concat(SYM_CODES)

    const passChar = []

    for (let i = 0; i < _charAmount; i++) {
        const char = CHAR_CODES[Math.floor(Math.random() * _charAmount)]
        passChar.push(String.fromCharCode(char))

    }
    let password = passChar.join('')
    console.log(password)
    return password
}

function genArray(low, high) {
    const arr = []
    for (let i = low; i <= high; i++) {
        arr.push(i)
    }
    return arr
}
