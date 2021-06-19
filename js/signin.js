$(document).ready(function (){

    // 为set添加点击事件
    init();
    function init(){

        var confirm = document.getElementById("signinconfirm");     //通过id获取按钮bn
        confirm.addEventListener("click",checkusername);  //为按钮添加点击事件
    }

})

function checkusername(){
    var name = document.getElementById("usernametype").value;
    console.log(name);
    var password = document.getElementById("passwordtype").value;
    console.log(password);

    //导入xml
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","./data/bookmark.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;

    if (name.length > 0 && password.length > 0){
        //遍历查询该用户
        var namechecklength = xmlDoc.getElementsByTagName("username").length;
        for (var i = 0; i < namechecklength ; i++) {
            if ( name === xmlDoc.getElementsByTagName('username')[i].childNodes[0].nodeValue ){
                //判断密码是否正确
                checkpassword(name, i, password);
                break;
            }else {
                if (i === namechecklength - 1){
                    window.alert("user is not exist.");
                }
            }
        }
        cleartype();
    }
    else {
        window.alert("no kidding me.")
    }
}

function cleartype(){
    document.getElementById("usernametype").value = '';
    document.getElementById("passwordtype").value = '';
}

//判断密码
function checkpassword(name, i, password){
    var key = xmlDoc.getElementsByTagName("password")[i].childNodes[0].nodeValue;
    console.log(key);
    if (password === key){
        signInSuccess(i);
    }else {
        window.alert("password is wrong.");
    }
}


function addLinks(e) {
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","./data/bookmark.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;

    var bookmark = xmlDoc.getElementsByTagName("bookmark")[e];
    var website =  bookmark.childNodes[1].childNodes[1].childNodes[0];
    var websitenumber = bookmark.childNodes.length;
    console.log(websitenumber);
    var n = bookmark.childNodes[3].childNodes[1].childNodes[0];
    console.log(n.nodeValue);
    for (var i = 1; i < websitenumber; i++) {
        var webname = bookmark.childNodes[i].childNodes[1].childNodes[0];
        console.log(webname.nodeValue);
        var sitelink = webname.parentNode.nextSibling.nextSibling.childNodes[0];
        console.log(sitelink.nodeValue);
        addALink(webname.nodeValue, sitelink.nodeValue);
        if (i < websitenumber - 1){
            i++;
        }
    }
}



function addALink(name, link) {
    var linkarea = document.getElementById("linkarea");
    var newbtn = document.createElement("div");
    newbtn.setAttribute("class", 'btn alignbtn');
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


function signInSuccess(i){
    cleartype();
    closeSignInBar();
    addLinks(i);
    var idNum = i;
   var username = xmlDoc.getElementsByTagName('username')[i].childNodes[0].nodeValue;
    document.getElementById("signinbtn").classList.add("invisible");
    document.getElementById("signupbtn").classList.add("invisible");
    document.getElementById("usernameBtn").classList.remove("invisible");
    document.getElementById("usernameBtn").innerText = username.toString();
    setCookie("id",idNum,30);
}