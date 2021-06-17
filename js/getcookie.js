$(document).ready(function (){

    document.cookie="id="+ name + "; path=/js/cookie";

})
function setCookie(id,idValue,exDays){
    var d = new Date();
    d.setTime(d.getTime()+(exDays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = id+"="+idValue+"; "+expires;
}

function getCookie(id){
    var idnumber = id + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(idnumber)===0) { return c.substring(idnumber.length,c.length); }
    }
    return "";
}
function checkCookie(){
    var userId=getCookie("id");
    if (userId!==""){
        signInSuccess(userId);
    }
}