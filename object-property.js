const students = [
    { id: 20, name: "Sakhib"},
    { id: 22, name: "Tamim"},
    { id: 26, name: "Musfiqure"},
    { id: 32, name: "Masrafi"},
    { id: 31, name: "Taskin"},
]
const names = students.map(s=>s.name);
console.log(names);
const ids= students.map(s=>s.id);
console.log(ids);
const bigger = students.filter(s => s.id > 25)
console.log(bigger)
const biggerOne = students.find(s => s.id > 30)
console.log(biggerOne)