let password=document.getElementById("password");
let eyeIcon= document.getElementById("img");
console.log(eyeIcon);
function showHide(){
    if (password.type=== "password") {
        password.type="text";
        eyeIcon.src= "./assets/eyeopen.png"
    }else{
        password.type="password"
        eyeIcon.src= "./assets/eyeclose.png"
    }
}