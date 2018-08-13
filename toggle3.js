document.addEventListener("DOMContentLoaded", function(event) {
    var fil = document.getElementById('cin1');
    fil.addEventListener('click',function(e){
        console.log (fil.src)
        if (fil.src === "file:///C:/Users/GWC13/Documents/Photo/cindy1.JPG") {
            fil.src = "file:///C:/Users/GWC13/Documents/Photo/cindy2.JPG";
        } else if (fil.src === "file:///C:/Users/GWC13/Documents/Photo/cindy2.JPG") {
            fil.src = "file:///C:/Users/GWC13/Documents/Photo/cindy3.JPG";
        } else if (fil.src === "file:///C:/Users/GWC13/Documents/Photo/cindy3.JPG") {
            fil.src = "file:///C:/Users/GWC13/Documents/Photo/cindy4.JPG";
        } else if (fil.src === "file:///C:/Users/GWC13/Documents/Photo/cindy4.JPG") {
            fil.src = "file:///C:/Users/GWC13/Documents/Photo/cindy1.JPG";
        }
    });
});