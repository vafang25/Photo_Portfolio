document.addEventListener("DOMContentLoaded", function(event) {
    var dig = document.getElementById("noe1");
    dig.addEventListener('click',function(e){
        console.log (dig.src)
        if (dig.src === "file:///C:/Users/GWC13/Documents/Photo/noelle1.JPG") {
            dig.src = "file:///C:/Users/GWC13/Documents/Photo/noelle2.JPG";
        } else if (dig.src === "file:///C:/Users/GWC13/Documents/Photo/noelle2.JPG") {
            dig.src = "file:///C:/Users/GWC13/Documents/Photo/noelle3.JPG";
        } else if (dig.src === "file:///C:/Users/GWC13/Documents/Photo/noelle3.JPG") {
            dig.src = "file:///C:/Users/GWC13/Documents/Photo/noelle4.JPG";
        } else if (dig.src === "file:///C:/Users/GWC13/Documents/Photo/noelle4.JPG") {
            dig.src = "file:///C:/Users/GWC13/Documents/Photo/noelle1.JPG";
        }
    });
});