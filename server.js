const {add, subtraction, multiply, divide} = require('./math')
const {date} = require("./date")
const {days} = require ("./day")
const {name} = require ("./name")

console.log(add(200,60))
console.log(subtraction(500,60))
console.log(multiply(2,60))
console.log(divide(30,60))
console.log(date())
console.log(days())
console.log(name("mukh", "tar"))
