$(document).ready(function () {

    init();

    function init() {
        //为add添加点击事件
        var add = document.getElementById("add");     //通过id获取按钮bn
        add.addEventListener("click",addLinks);  //为按钮添加点击事件
    }

})

function addLinks(e) {
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","./data/bookmark.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    var sitenumber = xmlDoc.getElementsByTagName("name").length;
    console.log(sitenumber);
    for (var i = 0; i < sitenumber; i++) {
        var sitename = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        console.log(sitename);
        var sitelink = xmlDoc.getElementsByTagName("url")[i].childNodes[0].nodeValue;
        console.log(sitelink);
        addALink(sitename, sitelink);
    }
}

function addALink(name, link) {
    var linkarea = document.getElementById("linkarea");
    var newbtn = document.createElement("div");
    newbtn.setAttribute("class", 'btn');
    newbtn.innerText = name;
    newbtn.setAttribute("id", name);
    linkarea.appendChild(newbtn);
    var bookmarks = {title:name, src:link};
    console.log(bookmarks["src"]);
    linkListener(bookmarks);
}

function linkListener(bookmarks){
    var title = bookmarks['title'];
    var src = bookmarks['src'];
    console.log(title);
    console.log(src);
    var newbtn = document.getElementById(title);
    console.log(newbtn);
    newbtn.addEventListener("click",function (){
        window.open(src);
    });  //为按钮添加点击事件
}