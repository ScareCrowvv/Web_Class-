function square(x){
    return x * x
}

let result = square(2)

document.write(result)

// => fat arrow function

square2 = (x) => x * x

let result2 = square2(2)

document.write(result2)

// rest Parameter
// Arith series

function ArithSeries(...x){

    let total = 0

    for(let num of x){
        total += num
    }
    const eq = x.join("+") + '=' + String(total)
    document.write(eq)

}

ArithSeries(1,2,3)
ArithSeries(1,2,3,4)
ArithSeries(1,2,3,4,5,6,7)


// rest Parameter

function countColors(PersonName, ...colors){
    document.write(PersonName + "has" + colors.length + "colors" + "<br>")

}

countColours("Alice", "Red", "Green")
countColors("Bob", "Red", "Green", "Blue")

// Spread-Operator

const fruits = ['apple', 'banana', 'orange']

const veg = ['potatoes', 'tomatoes', 'spanish']

const foods = []

foods.push(...fruits)

foods.push(...veg)

console.log(fruits + '<br>')

console.log(... fruits)

console.log(foods)

function square(x){
    return x * x
}

const num = [1,2,3,4,5]

const result3 = num.map(square)

document.write(result + '<br>')

document.write(num)


function isAdult(person){
    return person.age >= 18
}

const people = [{name: 'A', age:6}, {name: '19', age:6}, {name: 'C', age:21}, ]

const FirstAdult = people.find(isAdult)

document.write(FirstAdult)

// filter
//find
//fat-arrow
//spread operator
//rest parameter
//call backs
//map
//find
//filter




