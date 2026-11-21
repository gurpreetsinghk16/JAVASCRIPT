// // let a = document.getElementsByClassName ("box")
// // console.log(a)
// // a[2].style.backgroundColor = "red"


// // let a = document.getElementById("red").style.backgroundColor = "blue";


// document.querySelector(".box").style.backgroundColor = "red"

// let b = document.getElementsByTagName("div");
// console.log(b)

let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("i was clicked yehh")
    document.querySelector(".box").innerHTML = "yeh you were clicked"}
)