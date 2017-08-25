/**
 * Created by bear on 2017/8/25.
 */

Bmob.initialize("d683630edc4997f659ebf79879090a8b", "5ad004ee0ca43aaef8ae3c5dff56a906");

$("#nav li").click(function () {

    $(this).addClass("active").siblings().removeClass('active')

    var index=$(this).index();


    if(index=='0'){
      $("#homeInfo").show()
      $("#pwdInfo").hide()


    }

    if(index=='1'){
      $("#homeInfo").hide()
      $("#pwdInfo").show()


    }

})

var userInfo=JSON.parse(window.localStorage.getItem("userInfo"))

console.log(userInfo)
$("#username").val(userInfo.username)


$("#update").click(function () {

    var newPwd=$("#newPwd").val()

    var user = Bmob.Object.extend("_User");
    var query = new Bmob.Query(user);
    query.get("o0jEGGGL", {
        success: function(object) {
            // The object was retrieved successfully.
            object.set("pwd", newPwd);
            object.save(null, {
                success: function(objectUpdate) {
                    alert("修改密码成功!");
                },
                error: function(model, error) {
                    alert("修改密码失败!");
                }
            });
        },
        error: function(object, error) {
            alert("服务器错误！");
        }
    });


})
$("#add").click(function () {

    var url=$("#url").val()

    var webUrl = Bmob.Object.extend("webUrl");
    var query = new Bmob.Query(webUrl);
    query.get("39dd53fb39", {
        success: function(object) {
            // The object was retrieved successfully.
            object.set("url", url);
            object.save(null, {
                success: function(objectUpdate) {
                    alert("保存成功！");
                },
                error: function(model, error) {
                    alert("保存失败！");
                }
            });
        },
        error: function(object, error) {
            alert("服务器错误！");
        }
    });

})
