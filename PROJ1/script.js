let student = {
    id: 101,
    name: "Sumit",
    age: 20,
    isWorking: false,
    src:"https://cdn.vectorstock.com/i/1000v/98/56/cute-little-boy-cartoon-vector-21539856.jpg"
}
let {id, name, age, isWorking, src} = student
let info = `
    <h1> IT'S MINE PORTFOLIO </h1>
    <img src="${src}" alt="no image" height="100px" width="100px" >
    <h2> id: ${id} </h2>
    <h2> name: ${name} </h2>
    <h3> age: ${age} </h3>
    <h3> Working/student:${isWorking?"working profrssion":"student"}</h3>
`

document.write(info)