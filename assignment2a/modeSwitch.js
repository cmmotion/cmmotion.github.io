let isDark = false; 

/*`let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm*/

function switchModes(){
    
    if(isDark === true){
        console.log("i'm true");
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false;
    } else {
        console.log("i'm false");
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true;
    }
} 


/*function accessibileMode(){

    if(isOn === true) {
        console.log("i'm on");
        document.documentElemenById("noAnimation").innerHTML = "Accessible Version";
        document.documentElement.style.setProperty("animation:none");
        isOn = false;
    } else {
        console.log("i'm off");
        document.getElementById("noAnimation").innerHTML = "Regular Version";
        isOn = true;
    }

}*/

/*The else statement specifies a block of code to be executed if the condition is false: if (condition) { // block of code to be executed if the condition is true. } else {*/

