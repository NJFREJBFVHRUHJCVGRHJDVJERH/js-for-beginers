obj = {name: "harry",length:1}
jso = JSON.stringify(obj)
a = typeof jso
b = typeof obj
console.log(a)
console.log(b)
console.log(jso)

parse = JSON.parse(`{"name":"harry","length":1}`)
console.log(parse);
