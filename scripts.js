/* Add your JavaScript to this file */
var sub = function(){
    var email = document.getElementById("email");
    document.getElementsByClassName("btn")[1].addEventListener("click", function(x){
        var e = email.nodeValue;
        if(e == ""){
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";

        }
        else {
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address" + e + "has been added to our mailing list!"
        }
    })

}
window.onload = sub;