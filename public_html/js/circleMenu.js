$(document).ready(function(){
    menuButton=$(".circle-menu-btn");
    menuItem=$(".menu-item");
    circleMenu=$(".circle-menu");
    menuButton.click(function() {

        menuButton.toggleClass("active");
        if(menuButton.hasClass("active"))
        {
            menuItem.addClass("open");
            /*menuItem.removeClass("close");
            menuItem.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function (e) {
                    menuItem.removeClass("open");
                    menuItem.addClass("close");
                });*/
        }
        else
        {
            menuItem.addClass("close");
            menuItem.removeClass("open");
            menuItem.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function (e) {
                    menuItem.removeClass("close");
                });
        }

    })
});
