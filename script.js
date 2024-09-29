// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// // console.log(sum);

// // implicit return using products

// const product = numbers.reduce(
//     (accumulator, currentValue) => accumulator * currentValue
// );
// // console.log(product);
// //

// // const sum = numbers.reduce(function (accumulator, currentValue) {
// //     return accumulator + currentValue
// // }, 0)

// // console.log(sum);
// // const sum = numbers.reduce((accumulator, currentValue) => {
// //     return accumulator + currentValue
// // })

// // console.log(sum);

// //implicit return

// const divide = numbers.reduce((accumulator, currentValue) => accumulator / currentValue)

// // console.log(divide);

// const cart = [
// 	{id: 1, name: "Product1", price: 130},
// 	{id: 2, name: "Product2", price: 150},
// 	{id: 3, name: "Product3", price: 175},
// ];

// const total = cart.reduce((accumlator, product) =>{
//     return accumlator + product.price;
// }, 0 )
// console.log(total);

// const numbers = [2,-30,50,20,-12,-9,7]

// const positiveNumber = numbers.filter((number) => number > 0)
// console.log(positiveNumber);
// const positiveNumberSum = positiveNumber.reduce((acc, curr) => acc + curr)
// console.log(positiveNumberSum);
// const negativeNumber = numbers.filter((number) => number < 0)
// console.log(negativeNumber);

// CHALLENGE 3
const words = ['coder','programmer' ,'developer']

const capitalizedWord = words.map((word)=> {
    return word.slice(0,1).toUpperCase().concat(word.slice(1))
})

console.log(capitalizedWord);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

