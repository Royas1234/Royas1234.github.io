function display(val) {
    document.getElementById("result").value += val
    return val;

}
function equal(){
    let a = document.getElementById("result").value;
    let b =eval(a);
    document.getElementById("result").value = b;
    return b;
}
function clearScreen (  ){
    document.getElementById("result").value = " ";
}
function squareRoot ( ){
     let x =document.getElementById("result").value;
    let y =Math.sqrt(x);
     document.getElementById("result").value = y;
     return y;
     
}
function squareOf( ){
    let i = document.getElementById("result").value;
    let j = Math.pow(i, 2);
    document.getElementById("result").value = j;
    return j;

}