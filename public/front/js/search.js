/**
 * Created by 吴晗 on 2017/11/1 0001.
 */
mui('.mui-scroll-wrapper').scroll({
    indicators: false
});
function getHistory() {
    var search_history = localStorage.getItem("lt_search_history") || "[]";
    var arr = JSON.parse(search_history);
    return arr;
}
function render() {
    var arr = getHistory();
    console.log(arr);
    $(".lt_history").html(template("tpl", {arr: arr}));
}
render();

$(".lt_history").on("click",".icon_empty",function () {
    localStorage.removeItem("lt_search_history");
    render();
});

$(".lt_history").on("click",".fa-close",function () {
   var arr = getHistory();
    var index=$(this).data("index");
    arr.splice(index,1);
    localStorage.setItem("lt_search_history",JSON.stringify(arr));
    render();
});

$(".search_btn").on("click",function () {
    var key =$(".search_text").val().trim();
    if(key===""){
        mui.alert("请输入要买的商品");
        return;
    }
    var arr = getHistory();
    var index=arr.indexOf(key);
    if(index>-1){
        arr.splice(index,1);
    }
    if(arr.length>=10){
        arr.pop();
    }
    arr.unshift(key);
    localStorage.setItem("lt_search_history",JSON.stringify(arr));
    // render();
    location.href="searchList.html?key="+key;
})
