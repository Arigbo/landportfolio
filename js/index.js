function darkModeSwitch(){
    document.getElementById("dark-mode-switch").style.display= "none"
    document.getElementById("light-mode-switch").style.display= "block"
    document.getElementById("body").style.backgroundColor="black"
    document.getElementById("body").style.color="white"
}
function lightModeSwitch(){
    document.getElementById("light-mode-switch").style.display= "none"
    document.getElementById("dark-mode-switch").style.display= "block"
    document.getElementById("body").style.backgroundColor="white"
    document.getElementById("body").style.color="black"
}
function typeSwitch(){
    document.getElementById("body").style.backgroundColor= document.getElementById("upmb-switch").value
    document.getElementById("body").style.color= document.getElementById("upmt-switch").value
}