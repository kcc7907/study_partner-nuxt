$(document).ready(function () {
    console.log("OKK");

    // Navbar_Mobile
    let nav = $(".navMobile");
    let ul = $("nav ul");
    let li_a = $(".li_a");
    let logo = $(".Logo");

    nav.click(function (e) {
        if (nav.hasClass("-close") === false) {
            ul.css({
                "transform": "translateY(0%)",
                "opacity": "1"
            })
            nav.addClass("-close");
            logo.css({
                "opacity": "0"
            });

        } else {
            ul.css({
                "transform": "translateY(-100%)",
            })
            nav.removeClass("-close");
            setTimeout(() => {
                logo.css({
                    "opacity": "1"
                });
            }, 1000);
        }
    });
    // 手機板nav 點擊選項後關閉
    // li_a.click(closeNav);
    li_a.click(function () {
        ul.removeAttr("style");
        nav.removeClass("-close");
    });

    $(window).resize(function () {
        if ($(window).width() >= 800) {
            ul.removeAttr("style");
            nav.removeClass("-close");
        }
    });

});