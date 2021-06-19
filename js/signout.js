$(document).ready(function() {


    document.getElementById("usernameBtn").addEventListener("click", openPersonalPage);

});

function openPersonalPage(){
    var name = document.getElementById("usernameBtn").value;
    open("https://wangenius.github.io/userhost/" + name.toString() + ".html/");
}
