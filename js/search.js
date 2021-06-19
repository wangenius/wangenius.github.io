var SE = "https://www.baidu.com/s?wd=";
var se1 = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=";
var	se2 = "&cb=callback"
var nub = [0,0];
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

    txt.addEventListener("keydown",addRecommend);
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
    newbtn.setAttribute("class", 'btn searchtoolbtn alignbtn');
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


function yesRecommendArea(){
        document.getElementById("recommendBar").classList.remove("vanish");
}
function noRecommendArea(){
    document.getElementById("recommendBar").classList.add("vanish");
}
function checkRecommend(){
    if(document.getElementById("searchtype").value.length === 0){
        noRecommendArea();
        nub = [nub[1], 0];
    }else{
        yesRecommendArea();
    }

}


function addRecommend(){
    var val = document.getElementById("searchtype").value;
    console.log(val);
    if (val.length !== 0){
        var oRec = document.getElementById("recommendKits");
        oRec.innerHTML = "";
        var oScript = document.createElement("script");//动态创建script标签
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=callback";
        //添加链接及回调函数
        document.body.appendChild(oScript);//添加script标签
        document.body.removeChild(oScript);//删除script标签
    }else  {
        noRecommendArea();
        nub = [nub[1], 0];
    }

}
//回调函数
function callback(data){
    if (data.s.length > 10) {
        var lis =[data.s[0], data.s[1], data.s[2], data.s[3], data.s[4], data.s[5], data.s[6], data.s[7], data.s[8], data.s[9], data.s[10], data.s[11]];
        nub = [nub[1], 1];
    }
    if (data.s.length === 0){
        noRecommendArea();
        nub = [nub[1], 0];
        return;
    }
    else {
        lis = data.s;
        nub = [nub[1], 1];
    }
    checkRecommend();
    if (nub[0] === 0 && nub[1] === 1){
        yesRecommendArea(lis);
    }
    var oRec = document.getElementById("recommendKits");
    lis.forEach(function(value){
        var oBtn = document.createElement("div");
        oBtn.setAttribute("class", "btn alignbtn");
        oBtn.style.margin = "5px";
        oRec.appendChild(oBtn);
        console.log(value);
        oBtn.innerHTML = value;
        oBtn.onclick = function(){window.open(SE + value);}
    })
}



