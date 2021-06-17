var SE = "https://www.baidu.com/s?wd=";

$(document).ready(function (){
    var seeked = document.getElementById("searchbtn");
    seeked.onclick = function () {
        var inputword = document.getElementById("searchtype").value;
        window.open(SE + inputword);
    };

    var input = document.getElementById("searchtype");
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchbtn").click();
        }
    });

    var txt  = document.getElementById("searchtype");
    txt.focus();


})


function searchtooladd(){
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","./data/searchsite.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;

    var sitenumber = xmlDoc.getElementsByTagName("site").length;
    console.log(sitenumber);
    for (var i = 0; i < sitenumber; i++) {
        var sitename = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        console.log(sitename);
        var sitelink = xmlDoc.getElementsByTagName("headurl")[i].childNodes[0].nodeValue;
        console.log(sitelink);
        addASearchLink(sitename, sitelink);
    }

}

function addASearchLink(sitename, sitelink){
    var searchtoolarera = document.getElementById("searchtoolarera");
    var newbtn = document.createElement("div");
    newbtn.setAttribute("class", 'btn searchtoolbtn');
    newbtn.innerText = sitename;
    newbtn.setAttribute("id", name);
    searchtoolarera.appendChild(newbtn);
    searchtoolListener(newbtn, sitelink);
}

function searchtoolListener(newbtn, sitelink){
    newbtn.addEventListener("click",function (){
        SE = sitelink.toString();
        console.log(SE);
        closeusesearchbar();
    })
}



