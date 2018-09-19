function netteOverlayOpen(specificNetteOverlay, firstFocus, bodyOverflowFix, bodyPaddingFix) {
    var specificNetteOverlay = specificNetteOverlay ? specificNetteOverlay : "custom-layer-1";
    var firstFocus = firstFocus ? firstFocus : false;
    var bodyOverflowFix = bodyOverflowFix ? bodyOverflowFix : false;
    var bodyPaddingFix = bodyPaddingFix ? bodyPaddingFix : false;
    if (bodyPaddingFix) {
        $("body").css("padding-right", window.innerWidth - $(document).width());
    }
    if (bodyOverflowFix) {
        $("body").addClass("nette-overlay--shown");
    }
    $(".nette-overlay[data-specific='" + specificNetteOverlay + "']").addClass("nette-overlay--on");
    $(".nette-overlay.nette-overlay--out[data-specific='" + specificNetteOverlay + "']").removeClass("nette-overlay--out nette-overlay--end");
    if (firstFocus && $(".nette-overlay[data-specific='" + specificNetteOverlay + "'] form")[0]) {
        $(".nette-overlay[data-specific='" + specificNetteOverlay + "'] form").find("input[type='text']").first().focus();
    }
}

function netteOverlayClose() {
    var thisOpenOverlay = $(".nette-overlay.nette-overlay--on").data("specific");
    $(".nette-overlay.nette-overlay--on").addClass("nette-overlay--out").removeClass("nette-overlay--on");
    if ($(".nette-overlay__open[data-specific='" + thisOpenOverlay + "']").data("body-overflow-fix")) {
        $("body").removeClass("nette-overlay--shown");
    }
    if ($(".nette-overlay__open[data-specific='" + thisOpenOverlay + "']").data("body-padding-fix")) {
        $("body").removeAttr("style");
    }
    $(".nette-overlay").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
        $(".nette-overlay.nette-overlay--out").addClass("nette-overlay--end");
    });
}

$(document).ready(function () {
    $(".nette-overlay__open").on("click.netteoverlay", function (event) {
        event.preventDefault();
        var thisSpecific = $(this).data("specific");
        var thisFirstFocus = $(this).data("first-element-focus") ? $(this).data("first-element-focus") : false;
        var thisBodyOverflowFix = $(this).data("body-overflow-fix") ? $(this).data("body-overflow-fix") : false;
        var thisBodyPaddingFix = $(this).data("body-padding-fix") ? $(this).data("body-padding-fix") : false;
        netteOverlayOpen(thisSpecific, thisFirstFocus, thisBodyOverflowFix, thisBodyPaddingFix);
    });
    $(".nette-overlay__close, .nette-overlay").on("click.netteoverlay", function (event) {
        event.preventDefault();
        netteOverlayClose();
    });
    $(".nette-overlay__inner").on("click.netteoverlay", function (event) {
        event.stopPropagation();
    });
});

$(document).keyup(function (event) {
    if (event.keyCode == 27) {
        netteOverlayClose();
    }
});
