
const myPadString = (str = 'world', newLenght = 8, symbol = '*', flag = 'right') => { // eslint-disable-line
    let newStr = '';
    const resultLeng = newLenght - str.length;
    let symbol2 = symbol;
    if (symbol.length > 1) {    // eslint-disable-line
        symbol2 = symbol.slice(symbol.length - 1); // eslint-disable-line
    }
    if (str.length < newLenght) {
        if (flag === 'right') {
            for (let i = 0; i < resultLeng; i++) {
                newStr += symbol2;
            }
            return str + newStr;
        }
        else if (flag === 'left') {
            for (let j = 0; j < resultLeng; j++) {
                newStr += symbol2;
            }
            return newStr + str;
        }
    }
    return newStr;
};
myPadString('hello',10,'+','left');// eslint-disable-line

