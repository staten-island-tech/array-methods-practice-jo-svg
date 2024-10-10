const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];
// 1. Log each student’s name and grade
const statement1 = "\nThese are students who have above an 80: "
    console.log(statement1);
students
    .filter((topStudents) => topStudents.grade > 80)
    .forEach((topStudents) => console.log(topStudents.name))
const statement = "\nThese are students who are younger than 21 or 21: "
    console.log(statement);
students
    .filter((younger) => younger.age <= 21)
    .forEach((younger) => console.log(younger.name))
//part 3 assignment 1

console.log("\n")
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];
/* products
    .forEach((product) => console.log(product.name, ":", product.price))
    .forEach((product) => console.log(product.price))
    The issue with your code is that you are chaining two .forEach() calls on the same array. The first .forEach() does not return the array; it returns undefined. Therefore, when you attempt to call .forEach() a second time, you're trying to call it on undefined, which will cause an error. 
    you could either run it in one whole line/function or put it int o two functions
 */
products.forEach((product)=> {
    console.log(product.name, ":", product.price);
})
console.log("\nafter: ")
products.forEach((product)=> {
    console.log(product.name, ":", product.price * 1.1);
})

const categories = [];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('Unique Categories:', categories);
//creates a list of all the unique categories in the products array\
//assignment 2 part 1

const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);
const expensiveProducts = products.filter(product => product.price > 300);
console.log('Expensive Products:', expensiveProducts);
const highlyRatedProducts = products.filter(product => product.rated === 4.5 || product.rated > 4.5);
console.log('4.5 or higher rating: ', highlyRatedProducts)
//assignment 2 part 2

console.log('4.5 or higher rating: ', highlyRatedProducts.name)