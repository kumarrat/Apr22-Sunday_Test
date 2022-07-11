console.log('fetch data')
var url = " https://jsonplaceholder.typicode.com/users "
let btn = document.getElementById("btn")
let content = document.getElementById("content")

function getData() {
    let btnRef = document.getElementById("btn")
   let contentRef = document.getElementById("content")

   contentRef.innerText=data[0].value;
   
}

function fetchData(){
    url = " https://jsonplaceholder.typicode.com/users "
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data[0]);
    })
    
}

fetchData()




