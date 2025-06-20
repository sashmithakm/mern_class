/*console.log("Hello world");
console.warn("Warning!");
console.error("Error!");
console.table([{name: "Sri",age: "19"},{name: "Srinithi",age:"20"}])
//eval function
eval("let a=5;console.log(\"Hello world!\");console.log(a);");
let x=3.14;
console.log(x);
//JSON->JS OBJECT NOTATION
let obj={ name: "Jhon"};
let str= JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str);
console.log(back);
//localStorage.setItem("username","siva");
//localStorage.setItem("firstname",username);
//delect
//localStorage.removeItem("username");
//console.log(localStorage.getItem("username"));
//promise
let promise=new Promise((resolve) =>{
let=true;
//if (commit==true){
    setTimeout(()=>{resolve("Hello")}, 10000);
    //resolve("Done");
});
promise.then(res=> console.log(res)).catch(err => console.log(err));
//closure
function outer(){
    let name="JS";
    return function inner(){
        console.log(name);
    }
}*/
//DOM
/*let dom=document.getElementById("DOM");
let =document.querySelector("div");//list
dom.style.color=" cadetBlue";
//dom.innerText="Hello World!";

//let eleCreate=document.createElement("div");//element
//eleCreate.innerHTML="<h1>Hello world!</h1>";//data added

let newElement=document.createElement("h1");
newElement.innerText="Sashmitha";
setTimeout(() => {
    dom.appendChild(newElement)},5000);
setTimeout(() => {
    dom.removeChild(newElement)},7000);
let newElement1=document.createElement("h1");
newElement1.innerText="Welcome to my Page!!!";
setTimeout(() => {
    dom.appendChild(newElement1)},9000);*/


//append
/*console.log(divClass);
divClass.appendChild(eleCreate);*/
//remove child
//setTimeout(()=>{divClass.removeChild(eleCreate), 10000});
// setTimeout(,1000000);


let obj=document.getElementById("DOM");
obj.addEventListener("click",() => {
    let head_obj = document.getElementById("heading");
    console.log("clicked");
    head_obj.innerText="clicked!!!!";
});