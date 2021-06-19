$(document).ready(function() {


    document.getElementById("usernameBtn").addEventListener("click", openPersonalPage);

});

function openPersonalPage(){
    var name = document.getElementById("usernameBtn").nodeValue;
    console.log(name);
    window.location.href="userhost/"+ "wangenius" + ".html/";

    //window.location.href="https://wangenius.github.io/userhost/" + name.toString() + ".html/";

}
