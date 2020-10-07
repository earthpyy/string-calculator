
export function add (input: string): number | string {
    const delimiterMatch = input.match(/\/\/(.+)\n/)
    const delimiter = delimiterMatch? delimiterMatch[1].replace('[', '').replace(']',''): ',';
    const inputArray = delimiterMatch? input.split('//')[1] : input;
    const number = inputArray.replace('\n',delimiter).split(delimiter)
    const negative = number.filter(obj => Number(obj) < 0)
    const bigger = number.filter(obj => Number(obj) <= 1000)
    return number.some(obj => Number(obj) < 0) ? 'negatives not allowed ' + negative.toString() : bigger.map((number: string) => {
        return Number(number)
    }).reduce((bf,cur): number => {
        return bf + cur
    }, 0)
}
