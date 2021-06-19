$(document).ready(function () {

    document.addEventListener("keydown",function (event){
        if (event.ctrlKey){
            if (document.activeElement === document.getElementById("searchtype")){
                if (document.getElementById("searchtoolarera").classList.contains("vanish") === true){
                    usesearchbar();
                }else{
                    closeusesearchbar();
                }
            }
        }
    });

    var signbtn = document.getElementById("signinbtn");
    signbtn.addEventListener("click", useSignInBar);

    var tool = document.getElementById("searchtool");
    tool.addEventListener("click", usesearchbar);

    var closeSignBtn = document.getElementById("closesignbtn");
    closeSignBtn.addEventListener("click", closeSignInBar);


})

function usesearchbar(){
    document.getElementById("searchtoolarera").classList.remove("vanish");
    addshadow(document.getElementById("searchtoolarera"));
    if (document.getElementsByClassName("searchtoolbtn").length === 0){
        setTimeout("searchtooladd()","100");
    }

}

function closeusesearchbar(){
    var j = document.getElementsByClassName("searchtoolbtn").length;
    for (var i = j-1; i >= 0; i--) {
        document.getElementsByClassName("searchtoolbtn")[i].remove();
    }
    document.getElementById("searchtoolarera").classList.add("vanish");
}

function useSignInBar(){
    document.getElementById("signInBar").classList.remove("vanish");
    addshadow(document.getElementById("searchtoolarera"));
    setTimeout("document.getElementById(\"signInKits\").classList.remove(\"invisible\")","100");
}

function closeSignInBar(){
    document.getElementById("signInKits").classList.add("invisible")
    document.getElementById("signInBar").classList.add("vanish");
}