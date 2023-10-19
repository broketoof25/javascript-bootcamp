/* let data = {
    name: "Bob Buscher",
    age: 30
};

let json = JSON.stringify(data);

console.log(json); */

let json = `{"name":"Bob Buscher","age":30}`;
let data = JSON.parse(json);
console.log(data.name);