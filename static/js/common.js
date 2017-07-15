// 点击header登陆出现菜单 start
function deleteLogin() {
    var del = document.getElementById("login_box");
    var bg_filter = document.getElementById("bg_filter");
    bg_filter.style.display = "none";
    del.style.display = "none";
}

function showBox() {
    var show = document.getElementById("login_box");
    var bg_filter = document.getElementById("bg_filter");
    show.style.display = "block";
    bg_filter.style.display = "block";

}

// 点击header登陆出现菜单 end




//右侧图标 start
$(function() {

    /*返回顶部*/

    $('.returntop').click(function() {

        $(document).scrollTop(0)

    })

    $(window).scroll(function() {

        if ($(document).scrollTop() == 0) {

            $('.returntop').hide()

        } else {

            $('.returntop').show()

        }

    })

})

//右侧图标 end