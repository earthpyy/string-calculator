
export function add (input: string): number {
    const delimiterMatch = input.match(/\/\/(.+)\n/)
    console.log(delimiterMatch);
    const delimiter = input.startsWith('//') && delimiterMatch ? delimiterMatch[1] : ','
    const number = input.replace('\n',delimiter).split(delimiter)
    return number.map((number: string) => {
        return Number(number)
    }).reduce((bf,cur): number => {
        return bf + cur
    }, 0)
}
