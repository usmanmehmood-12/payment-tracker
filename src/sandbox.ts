let character = 'mario'
let age = 30
let isBlackBelt = false

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(7.5))

let ninja = {
    name: 'usman',
    belt: 'black',
    age: 27
}
/**Cannot add new properties to objs like this in ts */
//ninja.city='rwp'

/**Explicit Types */
let Hero: string
let heroAge: number
let loggedIn: boolean

Hero = "Usman"
heroAge = 27
loggedIn = true

/**Arrays */
let myHero: string[] = [] //initialize with empty array to use push method
myHero.push('Thor')

/** Union Type (arrays/variables having different type stuff inside) */
let mixed: (string | number)[] = [] // array of three types
mixed.push('hello')
mixed.push(1)
console.log('mixed array: ', mixed)

let uid: string | number
uid = 'my id'
uid = 1

/** Objects */
let ninjaOne: object
ninjaOne = { name: 'mario', age: 20 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

/** any */
let myName: any
myName = "Usman"
myName = 12
myName = {
    name: 'usman',
    age: 10
}

let anyArray: any[] = []
anyArray.push('mario')
anyArray.push(1)
anyArray.push(true)

let anyObj: { name: any, age: any }

/** FUnctions */
let myFunc: Function
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}
add(5, 5)

const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(5, 2)

/** Type Aliases */
type StringOrNum = string | number
type ObjWithNameUid = { name: string, uid: StringOrNum }

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: ObjWithNameUid) => {
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: ObjWithNameUid) => {
    console.log(`${user.name} says hello`)
}

/** Function Signatures */

//eg 1

let greetMe: (a: string, b: string) => void

greetMe = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`)
}

//eg 2

let calc: (a: number, b: number, action: string) => number
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    }
    else {
        return numOne - numTwo
    }
}

//eg 3

let logDetail: (obj: { name: string, age: number }) => void

type person = { name: string, age: number }
logDetail = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}