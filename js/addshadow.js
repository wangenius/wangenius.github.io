$(document).ready(function () {

    addshadow(document.getElementById("linkarea"));
    addshadow(document.getElementById("areasecond"));
    addshadow(document.getElementById("areathird"));
    addshadow(document.getElementById("signInBar"));
    var txt  = document.getElementById("searchtype");
    txt.onmouseover = function () {
        txt.focus();
        $("#searchboard").addClass("shadowed");
    };

});


$(document).on("click", function (){
    if (document.activeElement !== document.getElementById("searchtype")){
        $("#searchboard").removeClass("shadowed");
    }
});

function removeSearchShadow(){
    document.getElementById("searchtype").blur();
    $("#searchboard").removeClass("shadowed");
}

function addshadow(obj){
    console.log(obj);
    obj.onmouseover = function () {
        removeSearchShadow();
        obj.classList.add("shadowed");
    };
    obj.onmouseout = function () {
        obj.classList.remove("shadowed");
    };
}