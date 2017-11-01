/**
 * Created by 吴晗 on 2017/10/29 0029.
 */
if (location.href.indexOf("login.html") < 0) {
    $.ajax({
        type: "get",
        url: "/employee/checkRootLogin",
        success: function (data) {
            if (data.error === 400) {
                location.href = "login.html";
            }
        }
    })
}
$(function () {
    $(document).ajaxStart(function () {
        NProgress.start();
    })
    $(document).ajaxStop(function () {
        setTimeout(function () {
            NProgress.done();
        }, 500);
    })
});

$(function () {
    $(".child").prev().on("click", function () {
        $(this).next().slideToggle();
    });
    $(".icon_menu").on("click", function () {
        $(".lt_aside").toggleClass("now");
        $(".main").toggleClass("now");
        $(".header").toggleClass("now");
    })

    $(".icon_logout").on("click", function () {
        $("#logoutModal").modal("show");
    });
    $(".btn_logout").on("click", function () {
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            success:function (data) {
                if(data.success){
                    window.location.href = "login.html";
                }
            }
        })
    })
});
