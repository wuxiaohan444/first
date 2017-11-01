/**
 * Created by 吴晗 on 2017/11/1 0001.
 */
var sc= mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

$.ajax({
    type:"get",
    url:"/category/queryTopCategory",
    success:function (data) {
      $(".lt_aside ul").html(template("tpl",data));
        renderScond(data.rows[0].id)
    }
});
function renderScond(id) {
    $.ajax({
        type:"get",
        url:"/category/querySecondCategory",
        data:{
            id:id
        },
        success:function (data) {
            $(".lt_main ul").html(template("tpl2",data));
        }
    });
}
$(".lt_aside").on("click","li",function () {
    $(this).addClass("now").siblings().removeClass("now");
    var id =$(this).data("id");
    renderScond(id);
    sc[1].scrollTo(0,0,500);
})
