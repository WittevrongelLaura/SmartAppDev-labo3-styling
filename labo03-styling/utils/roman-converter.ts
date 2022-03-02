// @ts-nocheck

export const numbers:any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const checkForRomanUnit = (value: number, unit: numbers) => {
    // console.log("value = " + value)
    // console.log("unit = " + unit)
    const modulo:number = value % unit
    //console.log(modulo)
    //const rest: number = unitsFound * unit - value 
    //console.log(rest)
    const unitsFound:number = Math.floor(value / unit)
    //console.log(unitsFound)
    // if (rest === 0){
        return {
            found: unitsFound,
            rest: modulo
        }
    //}
}

export const validateInput= (n: number): boolean => {
    const number: number = Math.floor(n)

    if(number > 9999){
        return false
    }

    return true
}

export const romanConverter = (n: number): [string, any] => {
    if(!validateInput(n)){
        return ['input too big', {}]
    }

    console.log(Object.entries(numbers).reverse())

    
    let romanString = ''
    let romanNumbers: any = {}

    let valueLeft = n


    // for (const key in numbers) {
    //     console.log(numbers[key])
    // }

    for (const [key, value] of Object.entries(numbers).reverse()) {
        console.log([key, value])
        
        const {found, rest} = checkForRomanUnit(valueLeft, value as number)
        //console.log({found, rest} )
        valueLeft = rest

        //if (!found) return ;

        if (found) {
            
            romanString = romanString.concat(`${key.repeat(found)}`)
            romanNumbers[key] = found
        }

    }

    return [
        romanString, romanNumbers
    ]
    // if (n == NaN) {
    //     return 'Must be a number'
    // } else if (n > 9999){
    //     return 'Too big'
    // } else {
    //     n = Math.floor(n)
    // }

    // return(
    //     //1: number als string
    //     //2: object met breakdown van de romeinse cijfers

    //     n.toString()
        
    // )
}