document.addEventListener("DOMContentLoaded", function(event) {
    var doex = document.getElementById('douexp1');
    doex.addEventListener('click',function(e){
        console.log (doex.src)
        if (doex.src === "file:///C:/Users/GWC13/Documents/Photo/de1.JPG") {
            doex.src = "file:///C:/Users/GWC13/Documents/Photo/de2.JPG";
        } else if (doex.src === "file:///C:/Users/GWC13/Documents/Photo/de2.JPG") {
            doex.src = "file:///C:/Users/GWC13/Documents/Photo/de1.JPG";
        }
    });
    
});