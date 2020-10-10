function add(num1, num2){
    console.log([...arguments])
    return num1 + num2 + arguments[2];
}
const result = add(5, 7, 8, 9);
console.log(result);