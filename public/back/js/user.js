/**
 * Created by 吴晗 on 2017/10/31 0031.
 */
$(function () {
    var currentPage =1;
    var pagesize = 5;
  
  function render() {
      $.ajax({
          type:"get",
          url:"/user/queryUser",
          data:{
              page:currentPage,
              pageSize:pagesize
          },
          success:function (data) {
              console.log(data);
              $("tbody").html(template("tpl",data));
              $("#paginator").bootstrapPaginator({
                  bootstrapMajorVersion:3,
                  currentPage:currentPage,
                  size:"small",
                  totalPages:Math.ceil(data.total/pagesize),
                  onPageItemClicked:function (event,originalEvent,type,page) {
                      currentPage=page;
                      render();
                  }
              })
          }
      })
  }
    render();
    $("tbody").on("click",".btn",function () {
      $("#userModal").modal("show");
        var id =$(this).parent().data("id");
        var isDelete = $(this).parent().data("isDelete");
        isDelete=isDelete==1?0:1;
        $(".btn_confirm").off().on("click",function () {
            $.ajax({
                type:"post",
                url:"/user/updateUser",
                data:{
                    id:id,
                    isDelete:isDelete
                },
                success:function (data) {
                    if(data.success){
                        $("#userModal").modal("hide");
                        render();
                    }
                }
            })
        })
    })
    
})