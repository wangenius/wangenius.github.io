$(document).ready(function (){

    // 为set添加点击事件
    init();
    function init(){
        var set = document.getElementById("set");     //通过id获取按钮bn
        set.addEventListener("click",yesBookmarkBlock);  //为按钮添加点击事件

        //关闭添加书签界面
        var close = document.getElementById("closebtn");     //通过id获取按钮bn
        close.addEventListener("click",noBookmarkBlock);  //为按钮添加点击事件

        //添加书签
        var confirm = document.getElementById("bookmarkconfirm");     //通过id获取按钮bn
        confirm.addEventListener("click",getBookmark);  //为按钮添加点击事件

        var board = document.getElementById("linkarea");
        board.addEventListener("dblclick", modifyLink);


    }

});

function modifyLink(){
    document.getElementById("set").click();
}

function yesBookmarkBlock(){
    var BookmarkBlock = document.getElementById("BookmarkBlock");
    BookmarkBlock.classList.remove("invisible");
    var backshadow = document.getElementById("backshadow");
    backshadow.classList.remove("invisible");
}

function noBookmarkBlock(){
    var BookmarkBlock = document.getElementById("BookmarkBlock");
    BookmarkBlock.classList.add("invisible");
    var backshadow = document.getElementById("backshadow");
    backshadow.classList.add("invisible");
}

function getBookmark(){
    var name = document.getElementById("bookmarktype").value;
    console.log(name);
    var link = document.getElementById("linktype").value;
    console.log(link);
    if (name.length > 0 && link.length > 0){
        addALink(name, link);
        noBookmarkBlock();
    }
    else {
        window.alert("it's empty for some address.")
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
    noBookmarkBlock();
    clearBookAdd();
}

function clearBookAdd(){
    document.getElementById("bookmarktype").value = '';
    document.getElementById("linktype").value = '';
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


//实现xml编辑
function addxml(bookmarks){

}
