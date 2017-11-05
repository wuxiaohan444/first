/**
 * Created by 吴晗 on 2017/11/2 0002.
 */
mui('.mui-scroll-wrapper').scroll({
    indicators: false
});
var data = {
    proName: "",
    brandId: "",
    price: "",
    num: "",
    page: 1,
    pageSize: 10
}

function render(data) {
    $.ajax({
        type: "get",
        url: "/product/queryProduct",
        data: data,
        success: function (data) {
            setTimeout(function () {
                $(".lt_product").html(template("tpl", data));
                console.log(data);
            },1000)
        }
    })
}
var key = tools.getParam("key");
$(".search_text").attr("placeholder",key);
// $(".search_text").val(key);
data.proName = key;
render(data);



$(".search_btn").on("click", function () {
    $(".lt_sort a").removeClass("now");
    $(".lt_sort span").removeClass("fa-angle-up").addClass("fa-angle-down");
    data.price = "";
    data.num = "";
    var key = $(".search_text").val().trim();
    if (key == "") {
        mui.toast("请输入搜索的商品");
    }
    data.proName = key;
    $(".lt_product").html('<div class="loading"></div>');
    render(data);
    $(".search_text").val("");
    $(".search_text").attr("placeholder",key);
});

$(".lt_sort>a[data-type]").on("click", function () {
    $(".lt_product").html('<div class="loading"></div>');
    var $this = $(this);
    var $span = $(this).find("span");
    if ($this.hasClass("now")) {
        $span.toggleClass("fa-angle-down").toggleClass("fa-angle-up")
    }
    else {
        $(this).addClass("now").siblings().removeClass("now");
        $(".lt_sort span").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
    var type = $this.data("type");
    var value = $span.hasClass("fa-angle-up") ? 1 : 2;
    data[type] = value;
    render(data);
    data.price = "";
    data.num = "";
})