
function getData(){
    return fetch("https://reqres.in/api/users")
    .then(res=>res.json())
}

export default getData;