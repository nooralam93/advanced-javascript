const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const part = nums.slice(3, 8);
console.log(part);
console.log(nums);

const remove = nums.splice(2, 5, 50, 60);
console.log(remove);
console.log(nums)

const togather = nums.join(",")
let togather1 = nums.join(" ")
 togather1 = nums.join("+")
console.log(togather1);