$(document).ready(function () {
    $(".nette-overlay__open").on("click", function (event) {
        event.preventDefault();

        var specificNetteOverlay = $(this).data("specific");
        $("body").addClass("nette-overlay--shown");
        $(".nette-overlay[data-specific='" + specificNetteOverlay + "']").addClass("nette-overlay--on");
        $(".nette-overlay.out[data-specific='" + specificNetteOverlay + "']").removeClass("nette-overlay--out nette-overlay--end");

        if ($(".nette-overlay[data-specific='" + specificNetteOverlay + "'] form")[0]) {
            $(".nette-overlay[data-specific='" + specificNetteOverlay + "'] form").find("input[type='text']").first().focus();
        }
    });

    $(".nette-overlay__close, .nette-overlay__backdrop").on("click", function (event) {
        event.preventDefault();
        $(".nette-overlay.nette-overlay--on").addClass("nette-overlay--out").removeClass("nette-overlay--on");
        $("body").removeClass("nette-overlay--shown");
        $(".nette-overlay").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
            $(".nette-overlay.nette-overlay--out").addClass("nette-overlay--end");
        });
    });
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $(".nette-overlay.nette-overlay--on").addClass("nette-overlay--out").removeClass("nette-overlay--on");
        $("body").removeClass("nette-overlay--shown");
        $(".nette-overlay").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
            $(".nette-overlay.nette-overlay--out").addClass("nette-overlay--end");
        });
    }
});
