let student = {
    id: 101,
    name: "Sumit",
    age: 20,
    isWorking: false,
    src:""
}
let {id, name, age, isWorking, src} = student
let info = `
    <h1> Welcome</h1>
    <img src=${src}>
`

document.write(info)